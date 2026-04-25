const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing encoder", () => {
    it("should detect DarQ encoder correctly", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)";

        expect(parse(releaseName)).to.deep.include({ encoder: "DarQ" });
    });

    it("should detect TAoE encoder correctly", () => {
        const releaseName = "Parenthood (2010) S03 (1080p BDRip x265 10bit DTS-HD MA 5.1 English - JBENT)[TAoE]";

        expect(parse(releaseName)).to.deep.include({ encoder: "JBENT" });
    });

    it("shouldn't detect when no encoder", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - HONE)";

        expect(parse(releaseName)).to.not.have.property('encoder');
    });
});
