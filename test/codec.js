const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing codec", () => {
    it("should detect the hevc codec correctly", () => {
        const releaseName = "Nocturnal Animals 2016 VFF 1080p BluRay DTS HEVC-HD2";

        expect(parse(releaseName)).to.deep.include({ codec: "hevc" });
    });

    it("should detect the x264 codec correctly", () => {
        const releaseName = "doctor_who_2005.8x12.death_in_heaven.720p_hdtv_x264-fov";

        expect(parse(releaseName)).to.deep.include({ codec: "x264" });
    });

    it("should detect the Web-DL codec correctly", () => {
        const releaseName = "The Vet Life S02E01 Dunk-A-Doctor 1080p ANPL WEB-DL AAC2 0 H 264-RTN";

        expect(parse(releaseName)).to.deep.include({ codec: "h264" });
    });

    it("should detect the XviD codec correctly", () => {
        const releaseName = "Gotham S03E17 XviD-AFG";

        expect(parse(releaseName)).to.deep.include({ codec: "xvid" });
    });

    it("should detect the Mpeg2 codec correctly", () => {
        const releaseName = "Jimmy Kimmel 2017 05 03 720p HDTV DD5 1 MPEG2-CTL";

        expect(parse(releaseName)).to.deep.include({ codec: "mpeg2" });
    });
});
