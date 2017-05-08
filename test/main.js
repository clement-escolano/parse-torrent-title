const { expect } = require("chai");
const parse = require("../index").parse;

xdescribe("Real-world releases", () => {
    it("sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR", () => {
        const releaseName = "sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR";
        expect(parse(releaseName)).to.deep.equal({ title: "sons of anarchy", resolution: "480p" });
    });
});
