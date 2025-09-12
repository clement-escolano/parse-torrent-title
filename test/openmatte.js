const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing extended", () => {
    it("should detect if the release is Open Matte", () => {
        const releaseName = "Harry Potter and the Goblet of Fire (2005) Open Matte (1080p AMZN WEB-DL x265 HEVC 10bit AAC 5.1 MONOLITH)";

        expect(parse(releaseName)).to.deep.include({ openmatte: true });
    });

    it("should not detect extended when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("openmatte");
    });
});
