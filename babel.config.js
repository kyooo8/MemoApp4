module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // 他に必要なプラグインがあればここに追加
    ],
  };
};
