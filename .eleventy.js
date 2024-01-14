// Import fast-glob package
const fg = require('fast-glob');

// Run search for images in /gallery and /sponsors
const duffleBags = fg.sync(['**/assets/images/featured-bags/duffle/*', '!**/_site']);

module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');

    eleventyConfig.addCollection('duffle', function(collection) {
      console.log(duffleBags)
      return duffleBags;
    });
  
    // Return configuration object.
    return {};
  };