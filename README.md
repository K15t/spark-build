# SPARK Build

__NOTE: The project is currently in beta state.__

SPARK build provides aa set of common gulp tasks (etc. different gulp tasks) for building SPARK projects.

More Information & full documentation: http://www.k15t.com/display/SPARK


## Installing

```
$ npm install spark-build
```


## Usage

Basic usage as part of your project gulp file:

```js
var sparkBuild = require('spark-build');

sparkBuild({
    moduleName: '<module-name>',
    resourcePath: '<resource-path>',
    paths: {
        'lib': {
            //The CSS files of the libraries
            'styles': {
                'prod': [],
                'dev':  []
            },
            'scripts': {
                //The js files of the libraries that should be delivered with the app (not minified!)
                'dev':  [],
                //The js files of the libraries that should be delivered with the app (minified!)
                'prod': [],
                //The js files of the libraries that must be provided to run tests
                'test': []
            },
            'assets':   []
        },
        'app': {
            'index': 'src/index.html',
            'styles':   [],
            'scripts':  [],
            'partials': [],
            'assets':   [],
            'tests':    []
        }
    }
});

```

After you added the required configuration you can start the gulp build as usual:

```js
$ gulp default
```

or

```js
$ gulp watch
```


## Options

Following configurations can be customized as well if needed:

- buildTargetDir (default '../../../../target')
- karmaPort (default '9876')
- karmaConfigFile (default configuration under build)
- karmaConfigFileTemplate (default configuration under build)
- jscsrc (Rule set to enforce best practices for java script, default configuration under build)


## Tips

The provided gulp task are split in different files according to what the task is intended for (e.g. cleanup.js, tests.js, ...).

This give you the opportunity to setup your own tasks based on the existing or in combination with your project specific gulp tasks.


## License

Licensed under The MIT License (MIT).
