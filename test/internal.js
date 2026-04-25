const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing internal", () => {
    it("should detect if the release is internal", () => {
        const releaseName = "Sex.Education.S01.iNTERNAL.HDR.1080p.WEB.H265-HDRHARHAR";

        expect(parse(releaseName)).to.deep.include({ internal: true });
    });

    it("should not detect internal when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";

        expect(parse(releaseName)).to.not.have.property("internal");
    });
});
