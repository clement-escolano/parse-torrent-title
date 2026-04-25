const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing theatrical", () => {
    it("should detect if the release is theatrical", () => {
        const releaseName = "Jurassic World Dominion 2022 Theatrical Cut 1080p UHD BluRay DDP7 1 DoVi HDR10 x265-c0kE";

        expect(parse(releaseName)).to.deep.include({ theatrical: true });
    });

    it("should not detect theatrical when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("theatrical");
    });
});
