#!/usr/bin/env node
const chalk = require('chalk')
const overpassBounds = require('./app');

const args = require('minimist')(process.argv.slice(2));
delete args._;

function formatArgsForCLI(args) {

    let output = "\n"

    Object.keys(args).forEach(arg => {
        output+=`    ${chalk.bold.green(arg)} : ${chalk.white(args[arg])}`
    })

    return output+'\n';
}

console.log('Querying the Overpass API with the following parameters:')
console.log(formatArgsForCLI(args))

overpassBounds._getBoundingBoxCLI(args)