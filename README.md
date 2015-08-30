# grunt-cli-babel

[![npm version badge](https://img.shields.io/npm/v/grunt-cli-babel.svg)](https://www.npmjs.org/package/grunt-cli-babel)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> [Grunt CLI](http://gruntjs.com/using-the-cli) wrapper around the Babel!



## Example

```js
import path from 'path';

export default grunt => {
	let clean = {
		test: [
			path.resolve('cache')
		]
	};

	grunt.initConfig({ clean });

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('test', ['clean']);
	grunt.registerTask('default', ['test']);
};
```

Yeah, you can write the Gruntfile using ECMAScript 6th edition! 


## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.


## Installation

There're two ways!

### global


```shell
sudo npm install -g grunt-cli-babel
```

#### Usage

```
grunt task
```


#### local

There's an alternative and more preferred way based on `package.json`. <br />

```json
{
	"private": true,

	"scripts": {
		"clean": "grunt clean"
	},

	"dependencies": {
		"grunt-contrib-clean": "^0.6.0",
		"grunt-cli-babel"    : "^0.0.2"
	}
}
```


#### Usage

```
npm run task
```

See more details about [npm run](https://docs.npmjs.com/misc/scripts).


## License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)
