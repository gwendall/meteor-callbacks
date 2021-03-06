Meteor Callbacks
=================

Global callback for Meteor.call on the client-side.

Installation
------------

``` sh
meteor add gwendall:callbacks
```

How to use
----------

**Callbacks.onCall**  
Defines the global callback. It doesn't hijack the callbacks you may have declared when calling Meteor.call. They will just execute as expected.

Example:

```javascript
  Callbacks.onCall = function(err, res) {
    console.log("Logs err, res for all your Meteor.call's!");
  });
```
To do
-----

- Catch Mongo operations (insert, update, etc.) callbacks.
