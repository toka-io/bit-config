## Bit, as simple as it gets.

bit-config is a NodeJS application configuration library. The library with scan the configuration folder for valid configuration files (files the a valid extension i.e. 'json')  and load them into the config object. Configuration properties can be accessed using dot notation (i.e. 'a.dot.notation').

Configuration file types supported:
* json

### Install
```
npm install toka-io/bit-config --save
```

### Configuration Parameters
```
NODE_CONFIG_DIR   # Configuration directory, defaults to './config'
NODE_CONFIG_TYPE  # Configuration file type, defaults to 'json'
```

### Example
```
const config = require('bit-config');

config.get('password.to.everything');
```
