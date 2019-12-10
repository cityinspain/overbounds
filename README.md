# overpass-bounds

Get a place's boundary coordinates using the Overpass API

## Usage

CLI
```
./node_modules/.bin/overpass-bounds --name "PLACE_NAME"
```

```
const overpassBounds = require('overpass-bounds');

overpassBounds.getBoundingBox('area[name="PLACE_NAME"]');
```