var gulp = require('gulp'),
    tasks = require('fs').readdirSync('./gulp'),
    config = {};

config.dirs = {
    base: __dirname,
    src: './src',
    dist: './dist',
    build: './dist/build'
};

config.vendors = [
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js'
];

tasks.map(function(task) {
    return require('./gulp/' + task)(gulp, config);
});