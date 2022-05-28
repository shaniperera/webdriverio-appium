// compiler to use next-gen JS features
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "16",
        },
      },
    ],
  ],
};
