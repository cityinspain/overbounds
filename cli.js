#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2));
const getBoundingBox = require('./app');

let overpassParams = 'area';

Object.keys(args).slice(1).forEach(arg => {
    overpassParams+=`[${arg}="${args[arg]}"]`
})


getBoundingBox(overpassParams)