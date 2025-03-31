module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Add custom collection for portfolios and sort by custom field 'order'
  eleventyConfig.addCollection("portfolios", function(collectionApi) {
    return collectionApi.getFilteredByTag("portfolios").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};