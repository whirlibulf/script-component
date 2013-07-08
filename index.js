function ComponentFactory(options) {
    //instance.scripts should be an array of objects that have an update method
    if (options.scripts) {
        this.scripts = options.scripts;
    }

    if (this.scripts === undefined) {
        this.scripts = [];
    }
}

module.exports = ComponentFactory;
