type WithListProperties<T> = T & {
  [K in keyof T as `${string & K}list`]?: NonNullable<T[K]>[]
}

declare namespace ParseTorrentTitle {

    interface ParserOptions {
        skipIfAlreadyFound?: boolean;
        type?: string;
        value?: string;
    }

    interface RawParserResult {
        year?: number;
        resolution?: string;
        extended?: boolean;
        unrated?: boolean;
        extras?: boolean;
        theatrical?: boolean;
        uncut?: boolean;
        openmatte?: boolean;
        proper?: boolean;
        repack?: boolean;
        internal?: boolean;
        hybrid?: boolean;
        convert?: boolean;
        hardcoded?: boolean;
        remux?: boolean;
        retail?: boolean;
        criterion?: boolean;
        remastered?: boolean;
        region?: string;
        container?: string;
        source?: string;
        service?: string;
        color?: string;
        codec?: string;
        audio?: string;
        samplerate?: number;
        channels?: number;
        bitdepth?: number;
        downscaled?: string;
        encoder?: string;
        group?: string;
        season?: number;
        episode?: number;
        language?: string;
    }

    type DefaultParserResult = WithListProperties<RawParserResult> & { title: string; };

    interface Handler<ParserResult = DefaultParserResult> {
        (input: { title: string, result: ParserResult }): void;
        (input: { title: string }): void;
        (input: { result: ParserResult }): void;
    }

    interface ParseFunction<ParserResult = DefaultParserResult> {
        (title: string): ParserResult;
    }

    interface AddHandlerFunction<ParserResult = DefaultParserResult> {
        (handlerName: string, handler: RegExp, options?: ParserOptions): void;
        (handlerName: string, handler: Handler<ParserResult>): void;
        (handler: Handler<ParserResult>): void;
    }

    interface AddDefaultsFunction {
        (parser: Parser): void;
    }

    class Parser<ParserResult = DefaultParserResult> {

        constructor();

        addHandler: AddHandlerFunction<ParserResult>;
        parse: ParseFunction<ParserResult>;
    }
}

declare module "parse-torrent-title" {

    export interface DefaultParserResult extends ParseTorrentTitle.DefaultParserResult { }
    export class Parser<ParserResult = DefaultParserResult> extends ParseTorrentTitle.Parser<ParserResult> { }
    export const parse: ParseTorrentTitle.ParseFunction;
    export const addHandler: ParseTorrentTitle.AddHandlerFunction;
    export const addDefaults: ParseTorrentTitle.AddDefaultsFunction;
}
