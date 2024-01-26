// Import fast-glob package
const fg = require('fast-glob');
const pluginSEO = require("eleventy-plugin-seo");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
// Run search for images in /gallery and /sponsors
const duffleBags = fg.sync(['**/assets/images/featured-bags/duffle/*', '!**/_site']);
const juteBags = fg.sync(['**/assets/images/featured-bags/jute/*', '!**/_site']);
const laptopBags = fg.sync(['**/assets/images/featured-bags/laptop/*', '!**/_site']);
const lunchBags = fg.sync(['**/assets/images/featured-bags/lunch/*', '!**/_site']);
const sleeves = fg.sync(['**/assets/images/featured-bags/sleeves/*', '!**/_site']);
const trekkingBags = fg.sync(['**/assets/images/featured-bags/trekking/*', '!**/_site']);
const slingBags = fg.sync(['**/assets/images/featured-bags/sling/*', '!**/_site']);
const waistBags = fg.sync(['**/assets/images/featured-bags/waist/*', '!**/_site']);

module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    

    module.exports =  function(eleventyConfig) {
      eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
    };


    eleventyConfig.addCollection('duffle', function(collection) {
      return duffleBags;
    });
    eleventyConfig.addCollection('jute', function(collection) {
      return juteBags;
    });
    eleventyConfig.addCollection('laptop', function(collection) {
      return laptopBags;
    });
    eleventyConfig.addCollection('lunch', function(collection) {
      return lunchBags;
    });
    eleventyConfig.addCollection('sleeves', function(collection) {
      return sleeves;
    });
    eleventyConfig.addCollection('trekking', function(collection) {
      return trekkingBags;
    });
    eleventyConfig.addCollection('sling', function(collection) {
      return slingBags;
    });
    eleventyConfig.addCollection('waist', function(collection) {
      return waistBags;
    });

  
    // Return configuration object.
    return {
      dir:{
        input: "src"
      }
    };
  };