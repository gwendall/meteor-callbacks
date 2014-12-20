Package.describe({
  name: "gwendall:callbacks",
  summary: "Global handlers for Meteor.call callbacks on the client-side",
  version: "0.1.0"
});

Package.on_use(function (api, where) {

  api.use([
    "mongo",
    "underscore"
  ], "client");

  api.add_files([
    "client/lib.js"
  ], "client");

  api.export("Callbacks", "client");

});
