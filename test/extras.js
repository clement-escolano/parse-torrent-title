const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing extras", () => {
    it("should detect if the release has extras", () => {
        const releaseName = "American Wedding 2003 Unrated + Extras 1080p BluRay H.265 10bit AAC 5.1-FreetheFish";

        expect(parse(releaseName)).to.deep.include({ extras: true });
    });

    it("should not detect extras when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("extras");
    });
});
