const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing retail", () => {
    it("should detect if the release is retail", () => {
        const releaseName = "MONSTER HIGH: ELECTRIFIED (2017) Retail PAL DVD9 [EAGLE]";
        expect(parse(releaseName)).to.deep.include({ retail: true });
    });

    it("should not detect retail when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";
        expect(parse(releaseName)).to.not.have.property("retail");
    });
});
