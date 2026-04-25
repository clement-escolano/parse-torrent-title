const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing samplerate", () => {
    it("should detect if the sample rate is 44.1kHz", () => {
        const releaseName = "Elton John - Jump Up! (Remastered 2003) FLAC 44.1kHz 16Bits 1982";

        expect(parse(releaseName)).to.deep.include({ samplerate: 44.1 });
    });

    it("should not detect samplerate when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("samplerate");
    });
});
