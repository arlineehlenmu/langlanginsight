module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/css");

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md").reverse();
  });

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["md", "njk", "html"]
  };
};
