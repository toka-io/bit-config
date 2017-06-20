const fs = require('fs');
const path = require('path');

/**
 * Bit Config
 */
class BitConfig {
  constructor() {    
    let configDir = process.env.NODE_CONFIG_DIR || './config';
    let files = fs.readdirSync(configDir);
    this.configurations = [];

    files.map((file) => {
      let content = this.readJson(path.join(configDir, file), 'utf8');
      this.configurations.push(content);
    });
    
    console.log(this.configurations);
  }

  readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  read(file) {
    switch(this.type) {
      case 'json':
        return getJson(property);
        break;
      default:
        return getJson(property);
    }
  }
  
  getJson(property) {
    return property.split('.').reduce((o, i) => (o === null) ? this.configurations[0][i] : o[i], null);
  }
  
  get(property) {
    switch(this.type) {
      case 'json':
        return this.getJson(property);
        break;
      default:
        return this.getJson(property);
    }
  }
}

module.exports = BitConfig;