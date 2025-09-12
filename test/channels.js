const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing season", () => {
    it("should detect 5.1 channels correctly", () => {
        const releaseName = "A Beautiful Mind (2001) [1080p amzn web-dl] - h264 ddp 5.1 -  NiSHKRiY0";

        expect(parse(releaseName)).to.deep.include({ channels: "5.1" });
    });

    it("shouldn't detect when no channels", () => {
        const releaseName = "My Adventures with Superman - 1xAll - Complete (Season 720p .mkv WEB)";

        expect(parse(releaseName)).to.not.have.property('channels');
    });
});
