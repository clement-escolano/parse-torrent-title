const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing resolution", () => {
    it("should detect the 1080p resolution correctly", () => {
        const releaseName = "Annabelle.2014.1080p.PROPER.HC.WEBRip.x264.AAC.2.0-RARBG";
        expect(parse(releaseName)).to.deep.include({ resolution: "1080p" });
    });

    it("should detect the 720p resolution correctly", () => {
        const releaseName = "doctor_who_2005.8x12.death_in_heaven.720p_hdtv_x264-fov";
        expect(parse(releaseName)).to.deep.include({ resolution: "720p" });
    });

    it("should detect the 720p resolution with uppercase correctly", () => {
        const releaseName = "UFC 187 PPV 720P HDTV X264-KYR";
        expect(parse(releaseName)).to.deep.include({ resolution: "720p" });
    });

    it("should detect the 4k resolution correctly", () => {
        const releaseName = "The Smurfs 2 2013 COMPLETE FULL BLURAY UHD (4K) - IPT EXCLUSIVE";
        expect(parse(releaseName)).to.deep.include({ resolution: "4k" });
    });
});

