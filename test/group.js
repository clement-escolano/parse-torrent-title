const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing group", () => {
    it("should detect the HD2 group correctly", () => {
        const releaseName = "Nocturnal Animals 2016 VFF 1080p BluRay DTS HEVC-HD2";
        expect(parse(releaseName)).to.deep.include({ group: "HD2" });
    });

    it("should detect the HDH group correctly", () => {
        const releaseName = "Gold 2016 1080p BluRay DTS-HD MA 5 1 x264-HDH";
        expect(parse(releaseName)).to.deep.include({ group: "HDH" });
    });

    it("should detect the YIFY group correctly", () => {
        const releaseName = "Hercules (2014) 1080p BrRip H264 - YIFY";
        expect(parse(releaseName)).to.deep.include({ group: "YIFY" });
    });

    it("should detect when there is no group", () => {
        const releaseName = "Western - L'homme qui n'a pas d'étoile-1955.Multi.DVD9";
        expect(parse(releaseName)).to.not.have.property("group");
    });
});

