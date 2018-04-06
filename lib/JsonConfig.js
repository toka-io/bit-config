const fs = require('fs');
const path = require('path');

/**
 * JsonConfig
 */
class JsonConfig {
  constructor(configDir) {
    let files = fs.readdirSync(configDir);
    this.configurations = [];

    files.map((file) => {
      let content = this.read(path.join(configDir, file), 'utf8');
      this.configurations.push(content);
    });
  }
  
  /**
   * Read and parse json configuration file
   * @return {object}
   */
  read(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  
  /**
   * Parses property from dot notation (i.e. 'prod.password') and returns the value from the configuration object
   * @return {string} || {object}
   */
  get(property) {
    if (!property)
      throw new Error('Property cannot be undefined or null');
    
    let p = property.split('.').reduce((o, i) => (o === null || o === undefined) ? this.configurations[0][i] : o[i], null);
    if (p)
      return p;
    else
      console.warn(`Property '${property}' not found. Please make sure the property exists in your config file.`);
  }
}

module.exports = JsonConfig;