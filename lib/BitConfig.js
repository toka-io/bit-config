const fs = require('fs');
const path = require('path');

/**
 * BitConfig
 */
class BitConfig {
  constructor(dir, type) {    
    this.dir = dir;
    this.type = type;
  }
  
  /**
   * Returns appropriate config file handler based on the configuration type
   * @return {Config} 
   */
  getConfig() {
    switch(this.type) {
      case 'json':
        return new (require('./JsonConfig.js'))(this.dir);
        break;
      default:
        return new (require('./JsonConfig.js'))(this.dir);
    }
  }
}

module.exports = BitConfig;