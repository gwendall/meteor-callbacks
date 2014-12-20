Callbacks = {};
Callbacks.onCall = function(err, res) {
  console.log("Method callback.", err, res);
}

Function.prototype.clone = function() {
  var that = this;
  var temp = function temporary() { return that.apply(this, arguments); };
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      temp[key] = this[key];
    }
  }
  return temp;
};

var extendWithCallback = function(fn) {
  fn = fn.clone();
  return function() {
    var fnContext = this;
    var fnArgs = [].slice.call(arguments);
    var fnArgsLast = _.last(fnArgs);
    var hasCallback = _.isFunction(fnArgsLast);
    var callback = function() {
      var cbContext = this;
      var cbArgs = [].slice.call(arguments);
      if (Callbacks && Callbacks.onCall && _.isFunction(Callbacks.onCall)) {
        Callbacks.onCall.apply(cbContext, cbArgs);
      }
      if (hasCallback) { fnArgsLast.apply(cbContext, cbArgs); }
    }
    if (hasCallback) { fnArgs.pop(); }
    fnArgs.push(callback);
    fn.apply(fnContext, fnArgs);
  }
}

Meteor.startup(function() {
  try {
    Meteor.call = extendWithCallback(Meteor.call);
  } catch(err) {
    console.log("Error initializing the Callbacks package.", err);
  }
});
