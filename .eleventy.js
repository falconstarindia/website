// Import fast-glob package
const fg = require('fast-glob');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
// Run search for images in /gallery and /sponsors
const duffleBags = fg.sync(['**/assets/images/featured-bags/duffle/*', '!**/_site']);

module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addCollection('duffle', function(collection) {
      return duffleBags;
    });
  
    // Return configuration object.
    return {
      dir:{
        input: "src"
      }
    };
  };