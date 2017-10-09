/**
 * bit-config - A library that provides access to config file properties using dot notation
 *
 * Supported file types:
 *   .json
 */
const dir = (process.env.NODE_CONFIG_DIR) ? process.env.NODE_CONFIG_DIR.trim() : './build/config';
const type = process.env.NODE_CONFIG_TYPE || 'json';

module.exports = new (require('./lib/BitConfig.js'))(dir, type).getConfig();
