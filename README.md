ember-rdfa-editor-sample-plugin
==============================================================================

This is an example plugin for [ember-rdfa-editor](http://github.com/lblod/ember-rdfa-editor). 
The plugin provides a hint when a user pushes the `suggest annotation` button in the editor and provides the option to annotate the selected text as a dct:description. 

known issues: 
 - probably broken on empty selection, assumes text is selected
 - some selections run into an error in ember-rdfa-editor <= 0.40.0. It seems its not always splitting text nodes correctly when required


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-rdfa-editor-sample-plugin
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
