var config = {};

config.kuzzleHost = process.env['TEST_KUZZLE_HOST'] || 'kuzzle';
config.kuzzlePort = process.env['TEST_KUZZLE_PORT_HTTP'] || '7512';
config.username = 'test';
config.password = 'test';
config.authCookieName = 'authToken';

module.exports = config;
