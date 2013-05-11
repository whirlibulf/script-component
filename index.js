function ComponentFactory(options) {
  this.id = 'script';
}

ComponentFactory.prototype.createComponent = function (options) {
  var scripts = options.scripts || [];

  //instance.scripts should be an array of objects that have an update method
  return {
    "scripts": scripts
  };
};

module.exports = ComponentFactory;
