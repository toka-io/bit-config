process.env['NODE_CONFIG_DIR'] = './configuration';

const expect = require('chai').expect;
const config = require('../index.js');

/**
 * Test BitConfig methods
 */
describe('BitConfig', () => {  
  it('get(property) - Get the property "prod.password" from config file', () => {
    let value = config.get('prod.password');
    expect(value).to.equal('kappa');
  });
  
  it('get(property) - Throw error when trying to get a property that does not exist', () => {
    expect(() => config.get('waifu')).to.throw('Property not found. Please make sure the property exists in your config file.');
  });
  
  it('get(null) - Throw error when trying to get null property', () => {
    expect(() => config.get(null)).to.throw('Property cannot be undefined or null');
  });
  
  it('get() - Throw error when trying to get an undefined property', () => {
    expect(() => config.get()).to.throw('Property cannot be undefined or null');
  });
  
  it('require(module) - Throw error if configuration directory does not exist', () => {
    // Reset cache to rebuild config with non-existent file directory
    process.env['NODE_CONFIG_DIR'] = './build/configuration';
    delete require.cache[require.resolve('../index.js')];
    expect(() => require('../index.js')).to.throw('no such file');
  });
});