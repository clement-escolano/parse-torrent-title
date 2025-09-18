const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing service", () => {
    it("should detect the AMZN service correctly", () => {
        const releaseName = "A.Beautiful.Mind.2001.1080p.AMZN.WEB-DL.DDP5.1.H.264-NiSHKRiY0";

        expect(parse(releaseName)).to.deep.include({ service: "AMZN" });
    });

    it("should detect when there is no service", () => {
        const releaseName = "Western - L'homme qui n'a pas d'étoile-1955.Multi.DVD9";

        expect(parse(releaseName)).to.not.have.property("service");
    });
});
