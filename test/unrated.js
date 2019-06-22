const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing unrated", () => {
    it("should detect if the release is unrated", () => {
        const releaseName = "Identity.Thief.2013.Vostfr.UNRATED.BluRay.720p.DTS.x264-Nenuko";

        expect(parse(releaseName)).to.deep.include({ unrated: true });
    });

    it("should detect if the release is uncensored", () => {
        const releaseName = "Charlie.les.filles.lui.disent.merci.2007.UNCENSORED.TRUEFRENCH.DVDRiP.AC3.Libe";

        expect(parse(releaseName)).to.deep.include({ unrated: true });
    });

    it("should not detect unrated when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";

        expect(parse(releaseName)).to.not.have.property("unrated");
    });
});
