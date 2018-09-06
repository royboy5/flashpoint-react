const defaultStylesConfig = [
  {
    css: {
      output: {
        comments: false
      },
      sourceMap: true,
      modules: true,
      localIdentName: "[name]__[local]_[hash:base64:5]"
    }
  }
];

module.exports = {
  type: "react-app",
  webpack: {
    html: {
      template: "public/index.html"
    },
    extra: {
      devtool: "cheap-source-map"
    },
    styles: {
      css: defaultStylesConfig
    }
  }
};
