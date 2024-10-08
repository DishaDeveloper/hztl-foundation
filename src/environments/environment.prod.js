/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};
config.production = process.env.PRODUCTION || "true";
config.sitecoreApiHost = process.env.SITECORE_API_HOST || "";
config.sitecoreApiKey = process.env.SITECORE_API_KEY || "no-api-key-set";
config.sitecoreSiteName = process.env.SITECORE_SITE_NAME || "SiteAlpha";
config.sitecoreLayoutServiceConfig = process.env.SITECORE_LAYOUT_SERVICE_CONFIG || "jss";
config.defaultLanguage = process.env.DEFAULT_LANGUAGE || "en";
config.defaultServerRoute = process.env.DEFAULT_SERVER_ROUTE || "/";
config.layoutServiceConfigurationName = process.env.LAYOUT_SERVICE_CONFIGURATION_NAME || "default";
config.graphQLEndpointPath = process.env.GRAPH_QL_ENDPOINT_PATH || "/api/graphql/v1";
config.graphQLEndpoint = process.env.GRAPH_QL_ENDPOINT || `${config.sitecoreApiHost}${config.graphQLEndpointPath}`;
module.exports.environment = config;