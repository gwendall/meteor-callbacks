Meteor Callbacks
=================

Global callback for Meteor.call on the client-side.

# Methods
**Callbacks.onCall**  
Defines the global callback.
-----------

Example:

```javascript
  Callbacks.onCall = function(err, res) {
    console.log("Logs err, res for all your Meteor.call's!");
  });
```
