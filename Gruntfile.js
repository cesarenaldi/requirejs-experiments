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
					optimize: 'none',
					paths: {
						jquery: "../../components/jquery/jquery"
					},
					wrap: {
						// start: 	"define(['jquery'], function(jquery){\n",
						// end: "return require('a');\n});"
						startFile: "parts/start.frag",
        				endFile: "parts/end.frag"
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
		},
		karma: {
			options: {
				configFile: 'karma.conf.js',
				runnerPort: 9999,
				browsers: ['Chrome']
			},
			continuous: {
				singleRun: true,
				browsers: ['PhantomJS']
			},
			dev: {
				reporters: 'dots'
			}
		}
	});

	grunt.registerTask('test', ['karma:dev']);
	grunt.registerTask('default', ['requirejs', 'karma:continuous']);
};
