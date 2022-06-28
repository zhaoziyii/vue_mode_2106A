module.exports = {
  plugins: {
    // postcss-pxtorem version >= 5.0.0
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
