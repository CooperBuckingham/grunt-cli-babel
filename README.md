# grunt-cli-babel

[![npm version badge](https://img.shields.io/npm/v/grunt-cli-babel.svg)](https://www.npmjs.org/package/grunt-cli-babel)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> [Grunt CLI](http://gruntjs.com/using-the-cli) wrapper around the Babel!


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

## Usage

### Example with global installation

* *Gruntfile.js*

```js
import path from 'path';

export default grunt => {
	let clean = {
		test: [
			path.resolve('cache')
		]
	};

	// Register "clean" task
	grunt.initConfig({ 
		clean 
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['clean']);
};
```

Yeah, you can write the Gruntfile using ECMAScript 6th edition!

* *package.json*

```js
{
	"dependencies": {
		"grunt-contrib-clean": "^0.6.0"
	}
}
```

* *Installation*

```sh
sudo npm install -g grunt-cli-babel
```

* *Using*

```sh
grunt clean
```

### Example with local installation

There's an alternative and more preferred way based on `package.json`. <br />

* *Gruntfile.js*

```js
import path from 'path';

export default grunt => {
	let clean = {
		test: [
			path.resolve('cache')
		]
	};

	// Register "clean" task
	grunt.initConfig({ 
		clean 
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['clean']);
};
```

* *package.json*

```js
{
	"scripts": {
		"clean": "grunt clean"
	},

	"dependencies": {
		"grunt-contrib-clean": "^0.6.0",
		"grunt-cli-babel"    : "^0.0.3"
	}
}
```

* *Installation*

```shell
npm install
```

* *Using*

```shell
grunt clean
```

See more details about [npm run](https://docs.npmjs.com/misc/scripts).


## License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)
