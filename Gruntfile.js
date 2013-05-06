'use strict';

module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		requirejs: {
			options: {
				optimize: 'none',
			},
			library: {
				options: {
					almond: true,
					baseUrl: "src/library",
					name: 'a',
					out: 'dist/library.js',
					optimize: 'uglify2',
					paths: {
						jquery: "../../components/jquery/jquery"
					},
					wrap: {
						start: 	'define(function(){\n',
						end: '});'
					},
					exclude: ['jquery']
				}
			},
			consumer: {
				options: {
					baseUrl: "src",
					name: "consumer",
					out: "dist/consumer.js",
					paths: {
						jquery: "../components/jquery/jquery",
						library: "../dist/library"
					},
					exclude: ['jquery']
				}
			}
		}
	});

	grunt.registerTask('test', []);
	grunt.registerTask('default', ['requirejs']);
};
