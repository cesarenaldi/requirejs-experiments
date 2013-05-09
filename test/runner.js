var tests = Object.keys(window.__karma__.files).filter(function (file) {
      return /\.spec\.js$/.test(file);
})

require.config({
	baseUrl: '/base',
	paths: {
		jquery: 'components/jquery/jquery',
		library: 'dist/library',
		consumer: 'src/consumer'
	},
	deps: tests,
	callback: window.__karma__.start
})