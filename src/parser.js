function extendOptions(options) {
    options = options || {};

    const defaultOptions = {
        skipIfAlreadyFound: true,
        type: "string",
    };

    options.skipIfAlreadyFound = options.skipIfAlreadyFound || defaultOptions.skipIfAlreadyFound;
    options.multipleParts = options.multipleParts || defaultOptions.multipleParts;

    return options;
}

function createHandlerFromRegExp(name, regExp, options) {
    let transformer;

    if (!options.type) {
        transformer = input => input;
    } else if (options.type.toLowerCase() === "lowercase") {
        transformer = input => input.toLowerCase();
    } else if (options.type.toLowerCase().substr(0, 4) === "bool") {
        transformer = input => true;
    } else if (options.type.toLowerCase().substr(0, 3) === "int") {
        transformer = input => parseInt(input, 10);
    } else {
        transformer = input => input;
    }

    return ({ title, result }) => {
        if (result[name] && options.skipIfAlreadyFound) {
            return;
        }

        const match = title.match(regExp);
        const [rawMatch, cleanMatch] = match || [];

        if (rawMatch) {
            result[name] = transformer(cleanMatch || rawMatch);
            return match.index;
        }
    }
}

function cleanTitle(rawTitle) {
    if (rawTitle.indexOf(" ") === -1 && rawTitle.indexOf(".") !== -1) {
        rawTitle = rawTitle.replace(/\./g, " ");
    }

    rawTitle = rawTitle.replace(/_/g, " ");
    rawTitle = rawTitle.replace(/([(_]|- )$/, "").trim();

    return rawTitle;
}

class Parser {

    constructor() {
        this.handlers = [];
    }

    addHandler(handlerName, handler, options) {
        if (typeof handler === "undefined" && typeof handlerName === "function") {
            // If no name is provided and a function handler is directly given
            handler = handlerName;
            handlerName = "Unknown handler";
        } else if (typeof handlerName === "string" && handler instanceof RegExp) {
            options = extendOptions(options);
            // If the handler provided is a regular expression
            handler = createHandlerFromRegExp(handlerName, handler, options);
        } else if (typeof handler !== "function") {
            // If the handler is neither a function or a regular expression, throw an error
            throw new Error(`Handler for ${handlerName} should be a RegExp or a function. Got: ${typeof handler}`);
        }

        this.handlers.push(handler);
    }

    parse(title) {
        const result = {};
        let endOfTitle = title.length;

        for (const handler of this.handlers) {
            const matchIndex = handler({ title: title, result });
            if (matchIndex && matchIndex < endOfTitle) {
                endOfTitle = matchIndex;
            }
        }

        result.title = cleanTitle(title.substr(0, endOfTitle));

        return result;
    }
}

exports.Parser = Parser;
