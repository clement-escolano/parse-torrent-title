const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing audio", () => {
    it("should detect the dts audio correctly", () => {
        const releaseName = "Nocturnal Animals 2016 VFF 1080p BluRay DTS HEVC-HD2";
        expect(parse(releaseName)).to.deep.include({ audio: "dts" });
    });

    it("should detect the DTS-HD audio correctly", () => {
        const releaseName = "Gold 2016 1080p BluRay DTS-HD MA 5 1 x264-HDH";
        expect(parse(releaseName)).to.deep.include({ audio: "dts-hd" });
    });

    it("should detect the AAC audio correctly", () => {
        const releaseName = "Rain Man 1988 REMASTERED 1080p BRRip x264 AAC-m2g";
        expect(parse(releaseName)).to.deep.include({ audio: "aac" });
    });

    it("should convert the AAC2.0 audio to AAC", () => {
        const releaseName = "The Vet Life S02E01 Dunk-A-Doctor 1080p ANPL WEB-DL AAC2 0 H 264-RTN";
        expect(parse(releaseName)).to.deep.include({ audio: "aac" });
    });

    it("should detect the Mpeg2 audio correctly", () => {
        const releaseName = "Jimmy Kimmel 2017 05 03 720p HDTV DD5 1 MPEG2-CTL";
        expect(parse(releaseName)).to.deep.include({ audio: "dd5.1" });
    });

    it("should detect the AC3 audio correctly", () => {
        const releaseName = "A Dog's Purpose 2016 BDRip 720p X265 Ac3-GANJAMAN";
        expect(parse(releaseName)).to.deep.include({ audio: "ac3" });
    });

    it("should convert the AC-3 audio to AC3", () => {
        const releaseName = "Retroactive 1997 BluRay 1080p AC-3 HEVC-d3g";
        expect(parse(releaseName)).to.deep.include({ audio: "ac3" });
    });
});

