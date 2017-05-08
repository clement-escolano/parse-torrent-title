# parse-torrent-title

This package helps you extract information from a torrent name such as language, resolution and codec.

## Installation

You can install it using npm: 
```bash
npm install parse-torrent-title
```
You should use Node 4.0 or higher to use this package.

## Usage

A simple usage is as follow:
```javascript
const ptt = require("parse-torrent-title");
const information = ptt.parse("Game.of.Thrones.S01E01.720p.HDTV.x264-CTU");

console.log(information.title);      // Game of Thrones
console.log(information.season);     // 1
console.log(information.episode);    // 1
console.log(information.resolution); // 720p
console.log(information.codec);      // x264
console.log(information.source);     // HDTV 
console.log(information.group);      // CTU
```

## Advanced usage

This module is configurable and extendable using handlers and regular expressions.

### Regular expressions

If you want an extra field to be populated, you can use a regular expression as follow:

```javascript
const ptt = require("parse-torrent-title");
ptt.addHandler("part", /Part[. ]([0-9])/i, { type: "integer" });
const information = ptt.parse("Silent.Witness.S18E03.Falling.Angels.Part.1.720p.HDTV.x264-FTP");

console.log(information.part); // 1
```

If you want to keep only a part of the matched regular expression, you should use capturing groups
[explained here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). 

### Handlers

A handler is a function with the title and the resulting information as parameters.
It can modify the result in any wanted way.
If the matched string is not part of the title, it should return the beginning of it.

```javascript
const ptt = require("parse-torrent-title");
const information = ptt.parse("[REQ] Harry Potter And The Prisoner Of Azkaban 2004 1080p BluRay DTS x264-hV");
console.log(information.isHarryPotterRelated); // undefined

ptt.addHandler(({ title, result }) => {
    const match = title.match(/harry.potter/i);
    if (match) {
        result.isHarryPotterRelated = true;
    }
});

const information2 = ptt.parse("[REQ] Harry Potter And The Prisoner Of Azkaban 2004 1080p BluRay DTS x264-hV");
console.log(information2.isHarryPotterRelated); // true
```

## Multiple parsers

You may want several different parsers within the same project.
To do that, you can create new parsers simply:
```javascript
const Parser = require("parse-torrent-title").Parser;
const parser = new Parser();
const anotherParser = new Parser();
```

If you want to add default handlers to a parser, you can do so using the specific method:
```javascript
const ptt = require("parse-torrent-title");
const parser = new ptt.Parser();
ptt.addDefaults(parser); // parser is now ready
```

