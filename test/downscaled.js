const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing downscaled", () => {
    it("should detect if the release is downscaled", () => {
        const releaseName = "Friends (1994) S08 (1080p DS4K BDRip DV HDR DDP5.1 x265) - Vialle";

        expect(parse(releaseName)).to.deep.include({ downscaled: "4k" });
    });

    it("should not detect downscaled when the release is not flagged as such", () => {
        const releaseName = "Have I Got News For You S53E02 EXTENDED 720p HDTV x264-QPEL";

        expect(parse(releaseName)).to.not.have.property("downscaled");
    });
});
