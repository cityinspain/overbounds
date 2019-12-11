#!/usr/bin/env node

const overpassBounds = require('./app');
const args = require('minimist')(process.argv.slice(2));
delete args._;

console.log('args', args)

overpassBounds.getBoundingBox(args)