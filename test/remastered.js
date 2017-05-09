const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing remastered", () => {
    it("should detect if the release is remastered", () => {
        const releaseName = "The Fifth Element 1997 REMASTERED MULTi 1080p BluRay HDLight AC3 x264 Zone80";
        expect(parse(releaseName)).to.deep.include({ remastered: true });
    });

    it("should detect if the release is remaster (without 'ed')", () => {
        const releaseName = "Predator 1987 REMASTER MULTi 1080p BluRay x264 FiDELiO";
        expect(parse(releaseName)).to.deep.include({ remastered: true });
    });

    it("should not detect remastered when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";
        expect(parse(releaseName)).to.not.have.property("remastered");
    });
});
