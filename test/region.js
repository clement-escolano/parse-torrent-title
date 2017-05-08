const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing region", () => {
    it("should detect the R5 region correctly", () => {
        const releaseName = "Welcome to New York 2014 R5 XviD AC3-SUPERFAST";
        expect(parse(releaseName)).to.deep.include({ region: "R5" });
    });
});

