const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing title", () => {
    it("should return the title", () => {
        const releaseName = "La famille bélier";

        expect(parse(releaseName)).to.deep.include({ title: "La famille bélier" });
    });

    it("should remove dots", () => {
        const releaseName = "La.famille.bélier";

        expect(parse(releaseName)).to.deep.include({ title: "La famille bélier" });
    });

    it("should not remove dots when they are part of the title", () => {
        const releaseName = "Mr. Nobody";

        expect(parse(releaseName)).to.deep.include({ title: "Mr. Nobody" });
    });

    it("should remove underscores", () => {
        const releaseName = "doctor_who_2005.8x12.death_in_heaven.720p_hdtv_x264-fov";

        expect(parse(releaseName)).to.deep.include({ title: "doctor who" });
    });
});
