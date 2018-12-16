/**
 * Default values used for all templates on render.
 * Templte unfold.js overwrites these defaults.
 *
 * @type {{variables(): Array, prompts(): Array, helpers(): *, appends(): *, scripts(): *}}
 */

module.exports = {
  // pre-defined variables
  variables() {
    return [];
  },

  // collects info to variables.  Loads variables
  prompts() {
    return [];
  },

  // Handlebar helpers.
  helpers() {
    return {};
  },

  // After files written.  Loads variables.
  appends() {
    return {};
  },

  // run these.  Loads variables.
  scripts() {
    return {
      'before-unfold': [],
      'after-unfold': []
    };
  }
};