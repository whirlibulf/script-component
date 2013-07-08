function ComponentFactory(options) {
  //instance.scripts should be an array of objects that have an update method
  return {
    "scripts": options.scripts || []
  };
}

module.exports = ComponentFactory;
