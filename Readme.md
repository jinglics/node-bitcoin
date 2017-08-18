# node-litecoin
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

[travis-image]: https://travis-ci.org/freewil/node-litecoin.svg?branch=master
[travis-url]: https://travis-ci.org/freewil/node-litecoin

[npm-image]: https://img.shields.io/npm/v/litecoin.svg?style=flat
[npm-url]: https://npmjs.org/package/litecoin

[downloads-image]: https://img.shields.io/npm/dm/litecoin.svg?style=flat
[downloads-url]: https://npmjs.org/package/litecoin

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com

node-litecoin is a simple wrapper for the Bitcoin client's JSON-RPC API.

If starting a new project, I highly encourage you to take a look at the more modern [litecoin-core](https://github.com/seegno/litecoin-core), which features:
* ES6 support
* optional promise support
* support for newer REST API, in addition to RPC methods

The API is equivalent to the API document [here](https://en.litecoin.it/wiki/Original_Bitcoin_client/API_Calls_list).
The methods are exposed as lower camelcase methods on the `litecoin.Client`
object, or you may call the API directly using the `cmd` method.

## Install

`npm install litecoin`

## Examples

### Create client
```js
// all config options are optional
var client = new litecoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'username',
  pass: 'password',
  timeout: 30000
});
```

### Get balance across all accounts with minimum confirmations of 6

```js
client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```
### Getting the balance directly using `cmd`

```js
client.cmd('getbalance', '*', 6, function(err, balance, resHeaders){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```

### Batch multiple RPC calls into single HTTP request

```js
var batch = [];
for (var i = 0; i < 10; ++i) {
  batch.push({
    method: 'getnewaddress',
    params: ['myaccount']
  });
}
client.cmd(batch, function(err, address, resHeaders) {
  if (err) return console.log(err);
  console.log('Address:', address);
});
```

## SSL
See [Enabling SSL on original client](https://en.litecoin.it/wiki/Enabling_SSL_on_original_client_daemon).

If you're using this to connect to litecoind across a network it is highly
recommended to enable `ssl`, otherwise an attacker may intercept your RPC credentials
resulting in theft of your litecoins.

When enabling `ssl` by setting the configuration option to `true`, the `sslStrict`
option (verifies the server certificate) will also be enabled by default. It is
highly recommended to specify the `sslCa` as well, even if your litecoind has
a certificate signed by an actual CA, to ensure you are connecting
to your own litecoind.

```js
var client = new litecoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'username',
  pass: 'password',
  ssl: true,
  sslStrict: true,
  sslCa: fs.readFileSync(__dirname + '/myca.cert')
});
```
