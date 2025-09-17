const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing episode", () => {
    it("should detect regular episode correctly", () => {
        const releaseName = "The Simpsons S28E21 720p HDTV x264-AVS";

        expect(parse(releaseName)).to.deep.include({ episode: 21 });
    });

    it("should detect regular episode with lowercase correctly", () => {
        const releaseName = "breaking.bad.s01e01.720p.bluray.x264-reward";

        expect(parse(releaseName)).to.deep.include({ episode: 1 });
    });

    it("should detect regular episode with a space between", () => {
        const releaseName = "Dragon Ball Super S01 E23 French 1080p HDTV H264-Kesni";

        expect(parse(releaseName)).to.deep.include({ episode: 23 });
    });

    it("should detect episode with SxEE format correctly", () => {
        const releaseName = "Doctor.Who.2005.8x11.Dark.Water.720p.HDTV.x264-FoV";

        expect(parse(releaseName)).to.deep.include({ episode: 11 });
    });

    it("should detect episode when written as such", () => {
        const releaseName = " Anubis saison 01 episode 38 tvrip FR";

        expect(parse(releaseName)).to.deep.include({ episode: 38 });
    });

    it("should detect episode when written as such shortened", () => {
        const releaseName = " Le Monde Incroyable de Gumball - Saison 5 Ep 14 - L'extérieur";

        expect(parse(releaseName)).to.deep.include({ episode: 14 });
    });

    it("should detect episode with longer episode numbers", () => {
        const releaseName = "Taarak Mehta Ka Ooltah Chashmah S01E381 2008 DtKCs-tt1708446";

        expect(parse(releaseName)).to.deep.include({ episode: 381 });
    });

    it("should detect episode with longer episode numbers", () => {
        const releaseName = "Ek.Mahanayak.-.Dr.B.R.Ambedkar.S01E1135.Bhims.Loved.Ones.Bid.Him.Adieu.1080p.tt12492338.ZEE5.WEB-DL.AAC2.0.H.264-WADU";

        expect(parse(releaseName)).to.deep.include({ episode: 1135 });
    });
});
