module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');
    // Return configuration object.
    return {};
  };