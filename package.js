Package.describe({
  name: "gwendall:callbacks",
  summary: "Global handlers for Meteor.call callbacks on the client-side",
  version: "0.1.2",
  git: "https://github.com/gwendall/meteor-callbacks"

});

Package.on_use(function (api, where) {

  api.use([
    "mongo@1.0.9",
    "underscore@1.0.1"
  ], "client");

  api.add_files([
    "client/lib.js"
  ], "client");

  api.export("Callbacks", "client");

});
