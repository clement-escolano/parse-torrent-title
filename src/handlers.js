exports.addDefaults = /** @type Parser */ parser => {

    // Year
    parser.addHandler("year", /[^a-zA-Z0-9](?!^)[([]?((?:19[0-9]|20[012])[0-9])[)\]]?/, { type: "integer" });

    // Resolution
    parser.addHandler("resolution", /([0-9]{3,4}[pi])/i, { type: "lowercase" });
    parser.addHandler("resolution", /\b(4k)/i, { type: "lowercase" });
    parser.addHandler("resolution", /FHD|\b1080\b/i, { value: "1080p" });
    parser.addHandler("resolution", /UHD/i, { value: "4k" });

    // Extended
    parser.addHandler("extended", /EXTENDED(?:[\s.]CUT)?/i, { type: "boolean" });

    // Theatrical
    parser.addHandler("theatrical", /Theatrical(?:[. ]Cut)?/, { type: "boolean" });

    // Uncut
    parser.addHandler("uncut", /.+\bUNCUT\b/i, { type: "boolean" });

    // Open Matte
    parser.addHandler("openmatte", /OPEN[. ]MATTE/i, { type: "boolean" });

    // Downscaled
    parser.addHandler("downscaled", /\bDS4K\b/i, { value: "4k" });

    // Hybrid
    parser.addHandler("hybrid", /\bhybrid(\b|\d)/i, { type: "boolean" })

    // Convert
    parser.addHandler("convert", /CONVERT/, { type: "boolean" });

    // Hardcoded
    parser.addHandler("hardcoded", /HC|HARDCODED/, { type: "boolean" });

    // Remux
    parser.addHandler("remux", /REMUX/i, { type: "boolean" });

    // Proper
    parser.addHandler("proper", /\b(?:REAL.)?PROPER\b/i, { type: "boolean" });

    // Repack
    parser.addHandler("repack", /REPACK|RERIP/i, { type: "boolean" });

    // Internal
    parser.addHandler("internal", /\b[iI]NTERNAL\b/, { type: "boolean" });

    // Retail
    parser.addHandler("retail", /\bRetail\b/i, { type: "boolean" });

    // Remastered
    parser.addHandler("remastered", /\bRemaster(?:ed)?\b/i, { type: "boolean" });

    // Unrated
    parser.addHandler("unrated", /\bunrated|uncensored\b/i, { type: "boolean" });

    // Extras
    parser.addHandler("extras", /(?<=\b[12]\d{3}\b).*(\b|\.)\b(Extras?|Bonus|Extended[ ._-]Clip|Special Feature[s]?)\b/i, { type: "boolean" })

    // Criterion
    parser.addHandler("criterion", /\bCriterion\b/, { type: "boolean" });

    // Region
    parser.addHandler("region", /(?:\b|[Dd](?:vd|VD))(R[0-9])/);

    // Container
    parser.addHandler("container", /\b(MKV|AVI|MP4)\b/i, { type: "lowercase" });

    // Source
    parser.addHandler("source", /\b(?:HD-?)?CAM\b/, { type: "lowercase" });
    parser.addHandler("source", /\b(?:HD-?)?T(?:ELE)?S(?:YNC)?\b/i, { value: "telesync" });
    parser.addHandler("source", /\bHD-?Rip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bBRRip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bBDRip|BluRayRip\b/i, { value: "bdrip" });
    parser.addHandler("source", /\bDVDRip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bDVD(?:R[0-9])?\b/i, { value: "dvd" });
    parser.addHandler("source", /\bDVDscr\b/i, { type: "lowercase" });
    parser.addHandler("source", /\b(?:HD-?)?TVRip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bTC\b/, { type: "lowercase" });
    parser.addHandler("source", /\bPPVRip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bR5\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bVHSSCR\b/i, { type: "lowercase" });
    parser.addHandler("source", /((?:\bBlu-?Ray)|((?:\b|\d)BR))\b/i, { value: "bluray" });
    parser.addHandler("source", /\bWEB(?:-?DL)?\b(?!-?RIP)/i, { value: "web-dl" });
    parser.addHandler("source", /\bWEB-?Rip\b/i, { type: "lowercase" });
    parser.addHandler("source", /\b(?:DL|WEB|BD|BR)MUX\b/i, { type: "lowercase" });
    parser.addHandler("source", /\b(DivX|XviD)\b/, { type: "lowercase" });
    parser.addHandler("source", /HDTV/i, { type: "lowercase" });
    parser.addHandler("source", /\bIMAX[. -]Enhanced\b/i, { value: "imax-enhanced" });
    parser.addHandler("source", /\bIMAX\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bHDDVD\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bNTSC\b/i, { type: "lowercase" });
    parser.addHandler("source", /\bPAL\b/i, { type: "lowercase" });

    // Service
    parser.addHandler("service", /\bAMZN|Amazon\b/i, { value: "AMZN" });
    parser.addHandler("service", /\bAUBC\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bATVP\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bBNGE\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bDLWP\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bDSCP\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bDSNP\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bFDNG\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bHULU\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bH?MAX\b/, { value: "HMAX" });
    parser.addHandler("service", /\b(?<!DTS-HD[\s\-\.])MA\b/i, { type: "uppercase" });
    parser.addHandler("service", /\b(NFLX|NF|Netflix)\b/i, { value: "NFLX" });
    parser.addHandler("service", /\biT(?:unes)\b/, { value: "iT" });
    parser.addHandler("service", /\bPCOK\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bROKU\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bSKST\b/i, { type: "uppercase" });
    parser.addHandler("service", /\bSTAN\b/i, { type: "uppercase" });

    // Codec
    parser.addHandler("codec", /h[-. ]?265|hevc/i, { value: "h265" });
    parser.addHandler("codec", /h[-. ]?264|avc/i, { value: "h264" });
    parser.addHandler("codec", /dvix|mpeg2|divx|xvid|x[-. ]?26[45]/i, { type: "lowercase" });
    parser.addHandler("codec", ({ result }) => {
        if (result.codec) {
            result.codec = result.codec.replace(/[ .-]/, "");
        }
    });

    // Color
    parser.addHandler("color", /\bHDR(?:10)?\b/i, { value: "HDR" });
    parser.addHandler("color", /\bSDR\b/i, { type: "uppercase" });
    parser.addHandler("color", /\b(?:DV|DoVi|Dolby\sVision)\b/i, { value: "DV" });

    // Audio
    parser.addHandler("audio", /\bATMOS\b|DA\d/i, { value: "atmos" });
    parser.addHandler("audio", /MD|MP3|mp3|FLAC|TrueHD/, { type: "lowercase" });
    parser.addHandler("audio", /\bDD-EX(\b|\d)/i, { value: "dd-ex" });
    parser.addHandler("audio", /\bDD(?:\+|P)|EAC-?3/i, { value: "ddp" });
    parser.addHandler("audio", /\b(DD(?!-EX)(?:\b|\d)|AC-?3)/i, { value: "dd" });
    parser.addHandler("audio", /AAC(?:[. ]?2[. ]0)?/, { value: "aac" });
    parser.addHandler("audio", /DTS-ES/, { type: "lowercase" });
    parser.addHandler("audio", /DTS-HD[\s-.]?(MA|Master Audio)/, { value: "dts-hd-ma" });
    parser.addHandler("audio", /DTS(?:[- ]?HD)/, { value: "dts-hd", skipIfAlreadyFound: true });
    parser.addHandler("audio", /DTS/, { value: "dts", skipIfAlreadyFound: true });

    // Channels
    parser.addHandler("channels", /\d+[.\s](?:1|0)\b/i);
    parser.addHandler("channels", /2(?:ch)/, { value: 2.0 });
    parser.addHandler("channels", /6(?:ch)/, { value: 5.1 });
    parser.addHandler("channels", /8(?:ch)/, { value: 7.1 });
    parser.addHandler("channels", ({ result }) => {
        if (result.channels && typeof result.channels === 'string') {
            result.channels = parseFloat(result.channels.replace(' ', '.'))
        }
    });

    // Bit depth
    parser.addHandler("bitdepth", /\b(8|10|12|16|24)[-\s.]?bits?\b/i, { type: "integer" });

    // Sample Rate
    parser.addHandler("samplerate", /\b((?:\d+)(?:\.\d+)?)[-\s.]?kHz?\b/i, { type: "float" });

    // Group
    parser.addHandler("group", /-[ ([]*(?:\w+[ \][)]+)?(\w+(?:\.\w+)?(?<!\.mkv|\.mp4))[)\]]?(?:\.(?:mkv|mp4))?$/i);

    // Encoder
    parser.addHandler("encoder", /-[ ([]*(?:(\w+)[ \][)]+)\w+(?:\.\w+)?(?<!\.mkv|\.mp4)[)\]]?(?:\.(?:mkv|mp4))?$/i);

    // Season
    parser.addHandler("season", /([0-9]{1,2})xall/i, { type: "integer" });
    parser.addHandler("season", /S([0-9]{1,2}) ?E[0-9]{1,2}/i, { type: "integer" });
    parser.addHandler("season", /([0-9]{1,2})x[0-9]{1,2}/, { type: "integer" });
    parser.addHandler("season", /(?:Saison|Season)[. _-]?([0-9]{1,2})/i, { type: "integer" });
    parser.addHandler("season", /\bS([0-9]{1,2})(?![0-9])/i, { type: "integer" });

    // Episode
    parser.addHandler("episode", /S[0-9]{1,2} ?E([0-9]{1,5})/i, { type: "integer" });
    parser.addHandler("episode", /[0-9]{1,2}x([0-9]{1,5})/, { type: "integer" });
    parser.addHandler("episode", /[ée]p(?:isode)?[. _-]?([0-9]{1,5})/i, { type: "integer" });

    // Language
    parser.addHandler("language", /\bMULTi(?:Lang|-audio|-VF2)?\b/i, { value: "multi" });
    parser.addHandler("language", /Dual(?:[- ]Audio)?|[ .]DL[ .]/i, { value: "dual" });
    parser.addHandler("language", /\bRUS\b/i, { type: "lowercase" });
    parser.addHandler("language", /\bUKR\b/i, { type: "lowercase" });
    parser.addHandler("language", /\bJPN\b/i, { type: "lowercase" });
    parser.addHandler("language", /\bENG(?:LISH)?\b/i, { value: "eng" });
    parser.addHandler("language", /\bNL\b/, { type: "lowercase" });
    parser.addHandler("language", /\bNORDiC\b/, { type: "lowercase" });
    parser.addHandler("language", /\bViETNAM\b/, { type: "lowercase" });
    parser.addHandler("language", /\bFLEMISH\b/, { type: "lowercase" });
    parser.addHandler("language", /\bGERMAN\b/i, { type: "lowercase" });
    parser.addHandler("language", /\bDUBBED\b/, { type: "lowercase" });
    parser.addHandler("language", /\bNORDIC\b/, { type: "lowercase" });
    parser.addHandler("language", /\bRoSubbed\b/i, { value: "romanian" })
    parser.addHandler("language", /\b(ITA(?:LIAN)?|iTA(?:LiAN)?)\b/, { value: "ita" });
    parser.addHandler("language", /\bFR(?:ENCH)?\b/, { type: "lowercase" });
    parser.addHandler("language", /\bTruefrench|VF(?:[FI])\b/i, { type: "lowercase" });
    parser.addHandler("language", /\bVOST(?:(?:F(?:R)?)|A)?|SUBFRENCH\b/i, { type: "lowercase" });
};
