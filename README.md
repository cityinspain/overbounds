# overbounds

Get a place's boundary coordinates using the Overpass API

## Usage

CLI
```
./node_modules/.bin/overbounds --name "PLACE_NAME"
```

```
const overpassBounds = require('overbounds');

overpassBounds.getBoundingBox('area[name="PLACE_NAME"]');
```