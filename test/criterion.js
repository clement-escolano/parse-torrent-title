const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing criterion", () => {
    it("should detect if the release is criterion", () => {
        const releaseName = "Uncut Gems (2019) Criterion (1080p BluRay x265 SDR DDP Atmos 7.1 English - DarQ HONE).mkv";

        expect(parse(releaseName)).to.deep.include({ criterion: true });
    });

    it("should not detect criterion when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("criterion");
    });
});
