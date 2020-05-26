/**
 * Get the config for the current build type, which
 * ensures that only the given config is included in the
 * build, which will prevent info/api key leakage
 */
export default function getConfig() {
  return process.env.REACT_APP_BUILD_TYPE === "development"
    ? require("./development.config.json")
    : require("./production.config.json");
}
