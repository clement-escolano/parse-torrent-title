declare namespace ParseTorrentTitle {

    interface ParserOptions {
        skipIfAlreadyFound?: boolean;
        type?: string;
        value?: string;
    }

    interface ParserResult {
        title: string;
        year?: number;
        resolution?: string;
        extended?: boolean;
        unrated?: boolean;
        proper?: boolean;
        repack?: boolean;
        convert?: boolean;
        hardcoded?: boolean;
        retail?: boolean;
        remastered?: boolean;
        region?: string;
        container?: string;
        source?: string;
        codec?: string;
        audio?: string;
        group?: string;
        season?: number;
        episode?: number;
        language?: string;
    }

    interface Handler {
        (input: { title: string, result: ParserResult }): void;
        (input: { title: string }): void;
        (input: { result: ParserResult }): void;
    }

    interface ParseFunction {
        (title: string): ParserResult;
    }

    interface AddHandlerFunction {
        (handlerName: string, handler: RegExp, options?: ParserOptions): void;
        (handlerName: string, handler: Handler): void;
        (handler: Handler): void;
    }

    interface AddDefaultsFunction {
        (parser: Parser): void;
    }

    class Parser {

        constructor();

        addHandler: AddHandlerFunction;
        parse: ParseFunction;
    }
}

declare module "parse-torrent-title" {

    export class Parser extends ParseTorrentTitle.Parser { }
    export const parse: ParseTorrentTitle.ParseFunction;
    export const addHandler: ParseTorrentTitle.AddHandlerFunction;
    export const addDefaults: ParseTorrentTitle.AddDefaultsFunction;
    export interface ParserResult extends ParseTorrentTitle.ParserResult { }
}
