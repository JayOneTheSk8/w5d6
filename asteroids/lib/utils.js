const Util = {
  inherits(childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = Surrogate.prototype;
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;
