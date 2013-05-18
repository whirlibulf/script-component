
# script-component

A component for attaching custom update scripts to objects in the Whirlibulf game engine.


## Installation

    $ component install whirlibulf/script-component


## Usage

Register the component:

    game.use('script', require('script-component'));

The options object for this component:

    {
      scripts: [...]
    }

The `scripts` property is an array of script objects.

The `whirlibulf/script-system` system requires the script objects to have an update method.


## Compatible Systems

* [whirlibulf/script-system](http://github.com/whirlibulf/script-system)

## License

  MIT
