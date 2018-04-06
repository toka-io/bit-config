process.env['NODE_CONFIG_DIR'] = './configuration';

const assert  = require('assert');
const config = require('../index.js');
const expect = require('chai').expect;
const sinon  = require('sinon');

/**
 * Test BitConfig methods
 */
describe('BitConfig', () => {  
  it('get(property) - Get the property "prod.password" from config file', () => {
    let value = config.get('prod.password');
    expect(value).to.equal('kappa');
  });
  
  it('get(property) - Throw error when trying to get a property that does not exist', () => {
    let spy = sinon.spy(console, 'warn');
   
    const property = 'ryujin.no.ken.wo.kurae';
    config.get(property);
    
    // assert that it was called with the correct value
    assert(spy.calledWith(`Property '${property}' not found. Please make sure the property exists in your config file.`));
  });
  
  it('get(null) - Throw error when trying to get null property', () => {
    expect(() => config.get(null)).to.throw('Property cannot be undefined or null');
  });
  
  it('get() - Throw error when trying to get an undefined property', () => {
    expect(() => config.get()).to.throw('Property cannot be undefined or null');
  });
  
  it('require(module) - Print warning if configuration directory does not exist', () => {
    // Reset cache to rebuild config with non-existent file directory
    process.env['NODE_CONFIG_DIR'] = './build/configuration';
    delete require.cache[require.resolve('../index.js')];
    expect(() => require('../index.js')).to.throw('no such file');
  });
});