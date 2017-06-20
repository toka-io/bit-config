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
			let content = fs.readFileSync(path.join(configDir, file), 'utf8');
		});
  }

  getJson() {
		this.files.filter((fpath) => {
			let json = JSON.parse(fs.readFileSync(fpath, 'utf8'));
			return json.
		});
	}

  get(property) {
    switch (this.type) {
			case 'json':
				return getJson(property);
			default:
				return getJson(property);
		}
  }
}

exports.default = new BitConfig();
