const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing season", () => {
    it("should detect bit depth season correctly", () => {
        const releaseName = "Harry Potter and the Goblet of Fire (2005) Open Matte (1080p AMZN WEB-DL x265 HEVC 10bit AAC 5.1 MONOLITH)";

        expect(parse(releaseName)).to.deep.include({ bitdepth: 10 });
    });

    it("shouldn't detect when no bit depth", () => {
        const releaseName = "My Adventures with Superman - 1xAll - Complete (Season 720p .mkv WEB)";

        expect(parse(releaseName)).to.not.have.property('bitdepth');
    });
});
