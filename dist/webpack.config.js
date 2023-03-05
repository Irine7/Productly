// NodeJS code here
const path = require('path')

module.exports = {
	watch: true,
	entry: './index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	}
}