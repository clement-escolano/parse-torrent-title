const { expect } = require("chai");
const parse = require("../index").parse;

describe("Random releases", () => {
    it("sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR", () => {
        const releaseName = "sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR";

        expect(parse(releaseName)).to.deep.equal({
            title: "sons of anarchy",
            resolution: "480p",
            season: 5,
            episode: 10,
            source: "bluray",
            codec: "x264",
            group: "GAnGSteR",
        });
    });

    it("Color.Of.Night.Unrated.DC.VostFR.BRrip.x264", () => {
        const releaseName = "Color.Of.Night.Unrated.DC.VostFR.BRrip.x264";

        expect(parse(releaseName)).to.deep.equal({
            title: "Color Of Night",
            unrated: true,
            language: "vostfr",
            source: "brrip",
            codec: "x264",
        });
    });

    it("Finding.Nemo.2003.DSNP.WEB-DL.1080p.HDR10.DDPDA5.1.HEVC-ARCADE.mkv", () => {
        const releaseName = "Finding.Nemo.2003.DSNP.WEB-DL.1080p.HDR10.DDPDA5.1.HEVC-ARCADE.mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "Finding Nemo",
            year: 2003,
            service: "DSNP",
            source: "web-dl",
            resolution: "1080p",
            color: "HDR",
            audio: "atmos",
            audiolist: ["atmos", "ddp"],
            channels: 5.1,
            codec: "h265",
            group: "ARCADE",
            container: "mkv"
        });
    });

    it("Joker.2019.1080p.BluRay.DD-EX5.1.x264-playHD", () => {
        const releaseName = "Joker.2019.1080p.BluRay.DD-EX5.1.x264-playHD";

        expect(parse(releaseName)).to.deep.equal({
            title: "Joker",
            year: 2019,
            resolution: "1080p",
            source: "bluray",
            audio: "dd-ex",
            channels: 5.1,
            codec: "x264",
            group: "playHD"
        });
    });

    it("Seinfeld.S07.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTb", () => {
        const releaseName = "Seinfeld.S07.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTb";

        expect(parse(releaseName)).to.deep.equal({
            title: "Seinfeld",
            season: 7,
            resolution: "1080p",
            service: "AMZN",
            source: "web-dl",
            audio: "ddp",
            channels: 2,
            codec: "h264",
            group: "NTb"
        })
    })

    it ("The Fresh Prince of Bel-Air (1990) S04 (1080p HMAX WEB-DL H265 SDR DD 2.0 English - HONE)", () => {
        const releaseName = "The Fresh Prince of Bel-Air (1990) S04 (1080p HMAX WEB-DL H265 SDR DD 2.0 English - HONE)";

        expect(parse(releaseName)).to.deep.equal({
            title: "The Fresh Prince of Bel-Air",
            year: 1990,
            season: 4,
            resolution: "1080p",
            service: "HMAX",
            source: "web-dl",
            codec: "h265",
            color: "SDR",
            audio: "dd",
            channels: 2.0,
            language: "eng",
            group: "HONE"

        });
    })

    it("Da Vinci Code DVDRip", () => {
        const releaseName = "Da Vinci Code DVDRip";

        expect(parse(releaseName)).to.deep.equal({
            title: "Da Vinci Code",
            source: "dvdrip",
        });
    });

    it("Some.girls.1998.DVDRip", () => {
        const releaseName = "Some.girls.1998.DVDRip";

        expect(parse(releaseName)).to.deep.equal({
            title: "Some girls",
            source: "dvdrip",
            year: 1998,
        });
    });

    it("Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65", () => {
        const releaseName = "Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65";

        expect(parse(releaseName)).to.deep.equal({
            title: "Ecrit Dans Le Ciel",
            source: "dvdrip",
            year: 1954,
            language: "multi",
            codec: "x264",
            audio: "dd",
            group: "gismo65",
        });
    });

    it("2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS", () => {
        const releaseName = "2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS";

        expect(parse(releaseName)).to.deep.equal({
            title: "2019 After The Fall Of New York",
            source: "bdrip",
            remastered: true,
            year: 1983,
            codec: "x264",
            group: "GHOULS",
        });
    });

    it("BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)";

        expect(parse(releaseName)).to.deep.equal({
            title: "BoJack Horseman",
            source: "web-dl",
            year: 2014,
            resolution: "1080p",
            codec: "x265",
            audio: "ddp",
            color: "SDR",
            language: "eng",
            service: "NFLX",
            season: 5,
            channels: 5.1,
            group: "HONE",
            encoder: "DarQ"
        });
    });

    it("Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO", () => {
        const releaseName = "Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO";

        expect(parse(releaseName)).to.deep.equal({
            title: "Ghost In The Shell",
            source: "hdrip",
            hardcoded: true,
            year: 2017,
            resolution: "720p",
            codec: "x264",
            audio: "dd",
            group: "EVO",
        });
    });

    it("Rogue One 2016 1080p BluRay x264-SPARKS", () => {
        const releaseName = "Rogue One 2016 1080p BluRay x264-SPARKS";

        expect(parse(releaseName)).to.deep.equal({
            title: "Rogue One",
            source: "bluray",
            year: 2016,
            resolution: "1080p",
            codec: "x264",
            group: "SPARKS",
        });
    });

    it("Desperation 2006 Multi Pal DvdR9-TBW1973", () => {
        const releaseName = "Desperation 2006 Multi Pal DvdR9-TBW1973";

        expect(parse(releaseName)).to.deep.equal({
            title: "Desperation",
            source: "dvd",
            sourcelist: ["dvd", "pal"],
            year: 2006,
            language: "multi",
            region: "R9",
            group: "TBW1973",
        });
    });

    it("Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG", () => {
        const releaseName = "Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG";

        expect(parse(releaseName)).to.deep.equal({
            title: "Maman, j'ai raté l'avion",
            source: "bluray",
            year: 1990,
            audio: "dts",
            resolution: "1080p",
            language: "vfi",
            codec: "x265",
            group: "HTG",
        });
    });

    it ("Rush.Hour.3.2007.German.EAC3.DL.1080p.BluRay.x265-VECTOR", () => {
        const releaseName = "Rush.Hour.3.2007.German.EAC3.DL.1080p.BluRay.x265-VECTOR";

        expect(parse(releaseName)).to.deep.equal({
            title: "Rush Hour 3",
            year: 2007,
            language: "dual",
            languagelist: ["dual", "german"],
            audio: "ddp",
            resolution: "1080p",
            source: "bluray",
            codec: "x265",
            group: "VECTOR"
        })
    });

    it("Spider-Man Into The Spider-Verse (2018) 1080p AMZN WEB-DL Multi-Audio DDP 5.1 E-Sub -24xHD", () => {
        const releaseName = "Spider-Man Into The Spider-Verse (2018) 1080p AMZN WEB-DL Multi-Audio DDP 5.1 E-Sub -24xHD";

        expect(parse(releaseName)).to.deep.equal({
            title: "Spider-Man Into The Spider-Verse",
            year: 2018,
            resolution: "1080p",
            service: "AMZN",
            source: "web-dl",
            language: "multi",
            audio: "ddp",
            channels: 5.1,
            group: "24xHD"
        })
    });

    it("Modern Family.S02.1080p.Bluray.DTS-HD Master Audio.5.1.SDR.x265-j3rico", () => {
        const releaseName = "Modern Family.S02.1080p.Bluray.DTS-HD Master Audio.5.1.SDR.x265-j3rico";

        expect(parse(releaseName)).to.deep.equal({
            title: "Modern Family",
            season: 2,
            resolution: "1080p",
            source: "bluray",
            audio: "dts-hd-ma",
            channels: 5.1,
            color: "SDR",
            codec: "x265",
            group: "j3rico"
        })
    })

    it("Iron Man 3 2013 Hybrid 1080p BluRay DDP Atmos 5 1 x264-BiTOR.mkv", () => {
        const releaseName = "Iron Man 3 2013 Hybrid 1080p BluRay DDP Atmos 5 1 x264-BiTOR.mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "Iron Man 3",
            year: 2013,
            hybrid: true,
            resolution: "1080p",
            source: "bluray",
            audio: "atmos",
            audiolist: ["atmos", "ddp"],
            channels: 5.1,
            codec: "x264",
            group: "BiTOR",
            container: "mkv"
        })
    })

    it("Allegiant (2016) (1080p BDRip x265 10bit TrueHD Atmos 7.1 - JBENT)[TAoE]", () => {
        const releaseName = "Allegiant (2016) (1080p BDRip x265 10bit TrueHD Atmos 7.1 - JBENT)[TAoE]";

        expect(parse(releaseName)).to.deep.equal({
            title: "Allegiant",
            year: 2016,
            resolution: "1080p",
            source: "bdrip",
            codec: "x265",
            bitdepth: 10,
            audio: "atmos",
            audiolist: ["atmos", "truehd"],
            channels: 7.1,
            encoder: "JBENT",
            group: "TAoE"
        })
    })

    it("The.Rookie.S04E11.PROPER.1080p.WEB.h264-GOSSIP[eztv.re].mkv", () => {
        const releaseName = "The.Rookie.S04E11.PROPER.1080p.WEB.h264-GOSSIP[eztv.re].mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "The Rookie",
            season: 4,
            episode: 11,
            proper: true,
            resolution: "1080p",
            source: "web-dl",
            codec: "h264",
            encoder: "GOSSIP",
            group: "eztv.re",
            container: "mkv"
        })
    })

    it("Friends (1994) S08 (1080p DS4K BDRip DV HDR DDP5.1 x265) - Vialle", () => {
        const releaseName = "Friends (1994) S08 (1080p DS4K BDRip DV HDR DDP5.1 x265) - Vialle";

        expect(parse(releaseName)).to.deep.equal({
            title: "Friends",
            year: 1994,
            season: 8,
            resolution: "1080p",
            downscaled: "4k",
            source: "bdrip",
            color: "HDR",
            colorlist: ["HDR", "DV"],
            audio: "ddp",
            channels: 5.1,
            codec: "x265",
            group: "Vialle"
        })
    })

    it("Star.Wars.Episodio.III.A.Vinganca.dos.Sith.2005.1080p.DSNP.WEB-DL.DDP5.1.Atmos.H.264.DUAL-sh4down.mkv", () => {
        const releaseName = "Star.Wars.Episodio.III.A.Vinganca.dos.Sith.2005.1080p.DSNP.WEB-DL.DDP5.1.Atmos.H.264.DUAL-sh4down.mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "Star Wars Episodio III A Vinganca dos Sith",
            year: 2005,
            resolution: "1080p",
            service: "DSNP",
            source: "web-dl",
            audio: "atmos",
            audiolist: ["atmos", "ddp"],
            channels: 5.1,
            codec: "h264",
            language: "dual",
            group: "sh4down",
            container: "mkv"
        })
    })

    it("Uncut Gems (2019) Criterion (1080p BluRay x265 SDR DDP Atmos 7.1 English - DarQ HONE).mkv", () => {
        const releaseName = "Uncut Gems (2019) Criterion (1080p BluRay x265 SDR DDP Atmos 7.1 English - DarQ HONE).mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "Uncut Gems",
            year: 2019,
            criterion: true,
            resolution: "1080p",
            source: "bluray",
            codec: "x265",
            color: "SDR",
            audio: "atmos",
            audiolist: ["atmos", "ddp"],
            channels: 7.1,
            language: "eng",
            encoder: "DarQ",
            group: "HONE",
            container: "mkv"
        })
    })

    it("American Wedding 2003 Unrated + Extras 1080p BluRay H.265 10bit AAC 5.1-FreetheFish", () => {
        const releaseName = "American Wedding 2003 Unrated + Extras 1080p BluRay H.265 10bit AAC 5.1-FreetheFish";

        expect(parse(releaseName)).to.deep.equal({
            title: "American Wedding",
            year: 2003,
            unrated: true,
            extras: true,
            resolution: "1080p",
            source: "bluray",
            codec: "h265",
            bitdepth: 10,
            audio: "aac",
            channels: 5.1,
            group: "FreetheFish"
        })
    })

    it("Spider-Man Across The Spider-Verse (2023) - [1080p BluRay DS4K DV x265] [DDP 7.1] - c0kE", () => {
        const releaseName = "Spider-Man Across The Spider-Verse (2023) - [1080p BluRay DS4K DV x265] [DDP 7.1] - c0kE";

        expect(parse(releaseName)).to.deep.equal({
            title: "Spider-Man Across The Spider-Verse",
            year: 2023,
            resolution: "1080p",
            source: "bluray",
            downscaled: "4k",
            color: "DV",
            codec: "x265",
            audio: "ddp",
            channels: 7.1,
            group: "c0kE"
        })
    })

    it("Uncut Gems (2019) - [1080p BluRay x264] [DTS-HD-MA 5.1] - EVO", () => {
        const releaseName = "Uncut Gems (2019) - [1080p BluRay x264] [DTS-HD-MA 5.1] - EVO";

        expect(parse(releaseName)).to.deep.equal({
            title: "Uncut Gems",
            year: 2019,
            resolution: "1080p",
            source: "bluray",
            codec: "x264",
            audio: "dts-hd-ma",
            channels: 5.1,
            group: "EVO"
        })
    })
});
