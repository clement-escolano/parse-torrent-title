const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing convert", () => {
    it("should detect if the release is convert", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";
        expect(parse(releaseName)).to.deep.include({ convert: true });
    });

    it("should not detect convert when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";
        expect(parse(releaseName)).to.not.have.property("convert");
    });
});
