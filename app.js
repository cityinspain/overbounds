const request = require('request');
const chalk = require('chalk');
var args = require('minimist')(process.argv.slice(2));


let overpassParams = 'area';

Object.keys(args).slice(1).forEach(arg => {
    overpassParams+=`[${arg}="${args[arg]}"]`
})

const requestUrl = `http://overpass-api.de/api/interpreter?data=[out:json];${overpassParams};rel(pivot);out geom;`

function cliGetBoundingBox() {
    request(requestUrl, (err, res, body) => {

        let elements = JSON.parse(body).elements;

        if (elements.length > 0) {

            if (elements.length === 1) {
                let bounds = elements[0].bounds;
                console.log(`\n    ${chalk.cyan("bounding box:")} (${bounds.minlat}, ${bounds.minlon}), (${bounds.maxlat}, ${bounds.maxlon})\n`)
            } else {
                console.log(`${chalk.bold.yellow("Warning: Multiple results")}\n${chalk.yellow("You may want to refine your query further.")}`)

                let counter = 1;

                elements.forEach(el => {

                    console.log(`${chalk.green(`Result ${counter}: \n`)}`)

                    let placeTags="";

                    Object.keys(el.tags).forEach(tag => {
                        placeTags+=`        ${tag}: "${el.tags[tag]}"\n`
                    })
                    console.log(`    ${chalk.cyan("Place tags:")}\n${placeTags}`)
                    
                    let bounds = el.bounds;

                    console.log(`${chalk.cyan("    Bounding box:")} (${bounds.minlat}, ${bounds.minlon}), (${bounds.maxlat}, ${bounds.maxlon})\n`)

                    counter++;
                })
            }

        }

    })
}

cliGetBoundingBox();