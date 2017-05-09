const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing language", () => {
    it("should detect the russian language correctly", () => {
        const releaseName = "Deadpool 2016 1080p BluRay DTS Rus Ukr 3xEng HDCL";
        expect(parse(releaseName)).to.deep.include({ language: "rus" });
    });

    it("should detect the netherlands language correctly", () => {
        const releaseName = "VAIANA: MOANA (2017) NL-Retail [2D] EAGLE";
        expect(parse(releaseName)).to.deep.include({ language: "nl" });
    });

    it("should detect the flemish language correctly", () => {
        const releaseName = "De Noodcentrale S02E05 FLEMISH 540p WEBRip AAC H 264";
        expect(parse(releaseName)).to.deep.include({ language: "flemish" });
    });

    it("should detect the english dubbed language correctly", () => {
        const releaseName = "Yo-Kai Watch S01E71 DUBBED 720p HDTV x264-W4F";
        expect(parse(releaseName)).to.deep.include({ language: "dubbed" });
    });

    it("should detect the truefrench language correctly", () => {
        const releaseName = "The Intern 2015 TRUEFRENCH 720p BluRay x264-PiNKPANTERS";
        expect(parse(releaseName)).to.deep.include({ language: "truefrench" });
    });

    it("should detect the french language correctly", () => {
        const releaseName = "127.Heures.FRENCH.DVDRip.AC3.XViD-DVDFR";
        expect(parse(releaseName)).to.deep.include({ language: "french" });
    });

    it("should detect the vostfr language correctly", () => {
        const releaseName = "La Famille Tenenbaum 2001 BRRip 720p VOSTFR x264 AAC - KiNGDOM";
        expect(parse(releaseName)).to.deep.include({ language: "vostfr" });
    });

    it("should detect the multi language correctly", () => {
        const releaseName = "Le Labyrinthe 2014 Multi-VF2 1080p BluRay x264-PopHD";
        expect(parse(releaseName)).to.deep.include({ language: "multi-vf2" });
    });
});

