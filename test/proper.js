const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing proper", () => {
    it("should detect if the release is proper", () => {
        const releaseName = "Into the Badlands S02E07 PROPER 720p HDTV x264-W4F";

        expect(parse(releaseName)).to.deep.include({ proper: true });
    });

    it("should detect if the release is real proper", () => {
        const releaseName = "Bossi-Reality-REAL PROPER-CDM-FLAC-1999-MAHOU";

        expect(parse(releaseName)).to.deep.include({ proper: true });
    });

    it("should not detect proper when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";

        expect(parse(releaseName)).to.not.have.property("proper");
    });
});
