const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing extended", () => {
    it("should detect if the release is extended", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";
        expect(parse(releaseName)).to.deep.include({ extended: true });
    });

    it("should not detect extended when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";
        expect(parse(releaseName)).to.not.have.property("extended");
    });
});
