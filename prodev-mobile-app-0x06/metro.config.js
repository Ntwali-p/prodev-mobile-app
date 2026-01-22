// metro.config.js
/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * Windows-friendly version for NativeWind + Expo Router
 */

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Force Windows-safe path for NativeWind
module.exports = withNativeWind(config, {
  input: path.join(__dirname, "styles/global.css"),
});
