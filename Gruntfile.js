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
					exclude: ['jquery'],
					wrap: {
						start: grunt.template.process(grunt.file.read("parts/start.frag"), {
							data: {
								dependencies: ['jquery'],
								name: 'a'
							}
						}),
						end: grunt.template.process(grunt.file.read("parts/end.frag"), {
							data: {
								dependencies: ['jquery'],
								entryPoint: 'a'
							}
						})
					}
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
