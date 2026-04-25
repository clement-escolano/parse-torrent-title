const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing uncut", () => {
    it("should detect if the release is uncut", () => {
        const releaseName = "Jaws.1975.Uncut.1080p.PCOK.WEB-DL.DDP5.1.H.264-Softboat.mkv";

        expect(parse(releaseName)).to.deep.include({ uncut: true });
    });

    it("should not detect uncut when the release is not flagged as such", () => {
        const releaseName = "Better.Call.Saul.S03E04.CONVERT.720p.WEB.h264-TBS";

        expect(parse(releaseName)).to.not.have.property("uncut");
    });
});
