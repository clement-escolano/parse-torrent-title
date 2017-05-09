exports.addDefaults = (parser) => {
    // Year
    parser.addHandler("year", /(?!^)[(\[]?((?:19[0-9]|20[012])[0-9])[)\]]?/, { type: "integer" });
    // Resolution
    parser.addHandler("resolution", /([0-9]{3,4}[pi])/i, { type: "lowercase" });
    parser.addHandler("resolution", /(4k)/i, { type: "lowercase" });
    // Extended
    parser.addHandler("extended", /EXTENDED/, { type: "boolean" });
    // Convert
    parser.addHandler("convert", /CONVERT/, { type: "boolean" });
    // Hardcoded
    parser.addHandler("hardcoded", /HC|HARDCODED/, { type: "boolean" });
    // Proper
    parser.addHandler("proper", /(?:REAL.)?PROPER/, { type: "boolean" });
    // Repack
    parser.addHandler("repack", /REPACK/, { type: "boolean" });
    // Region
    parser.addHandler("region", /R[0-9]/);
    // Container
    parser.addHandler("container", /MKV|AVI|MP4/i, { type: "lowercase" });
    // Source
    parser.addHandler("source", /hdtv|bluray|(?:b[dr]|dvd|hd|tv)rip|web-?(?:dl|rip)|dvd|ppv/i, { type: "lowercase" });
    // Codec
    parser.addHandler("codec", /dvix|mpeg2|divx|xvid|[xh][-. ]?26[45]|avc|hevc/i, { type: "lowercase" });
    parser.addHandler(({result}) => {
        if (result.codec) {
            result.codec = result.codec.replace(/[ .-]/, '');
        }
    })
};
