module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // litecoind v0.8.0+
  backupWallet: 'backupwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // litecoind v0.7.0+
  decodeRawTransaction: 'decoderawtransaction', // litecoind v0.7.0+
  decodeScript: 'decodescript',
  dumpPrivKey: 'dumpprivkey',
  dumpWallet: 'dumpwallet', // litecoind v0.9.0+
  encryptWallet: 'encryptwallet',
  estimateFee: 'estimatefee', // litecoind v0.10.0x
  estimatePriority: 'estimatepriority', // litecoind v0.10.0+
  generate: 'generate', // litecoind v0.11.0+
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // litecoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // litecoind v0.9.0+
  getBlock: 'getblock',
  getBlockchainInfo: 'getblockchaininfo', // litecoind v0.9.2+
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', // litecoind v0.7.0+
  getChainTips: 'getchaintips', // litecoind v0.10.0+
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getInfo: 'getinfo',
  getMempoolInfo: 'getmempoolinfo', // litecoind v0.10+
  getMiningInfo: 'getmininginfo',
  getNetTotals: 'getnettotals',
  getNetworkInfo: 'getnetworkinfo', // litecoind v0.9.2+
  getNetworkHashPs: 'getnetworkhashps', // litecoind v0.9.0+
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo', // litecoind v0.7.0+
  getRawChangeAddress: 'getrawchangeaddress', // litecoin v0.9+
  getRawMemPool: 'getrawmempool', // litecoind v0.7.0+
  getRawTransaction: 'getrawtransaction', // litecoind v0.7.0+
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout', // litecoind v0.7.0+
  getTxOutProof: 'gettxoutproof', // litecoind v0.11.0+
  getTxOutSetInfo: 'gettxoutsetinfo', // litecoind v0.7.0+
  getUnconfirmedBalance: 'getunconfirmedbalance', // litecoind v0.9.0+
  getWalletInfo: 'getwalletinfo', // litecoind v0.9.2+
  help: 'help',
  importAddress: 'importaddress', // litecoind v0.10.0+
  importPrivKey: 'importprivkey',
  importWallet: 'importwallet', // litecoind v0.9.0+
  keypoolRefill: 'keypoolrefill',
  keyPoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // litecoind v0.7.0+
  listLockUnspent: 'listlockunspent', // litecoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // litecoind v0.7.0+
  lockUnspent: 'lockunspent', // litecoind v0.8.0+
  move: 'move',
  ping: 'ping', // litecoind v0.9.0+
  prioritiseTransaction: 'prioritisetransaction', // litecoind v0.10.0+
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // litecoind v0.7.0+
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setGenerate: 'setgenerate',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // litecoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // litecoind v0.7.0+
  validateAddress: 'validateaddress',
  verifyChain: 'verifychain', // litecoind v0.9.0+
  verifyMessage: 'verifymessage',
  verifyTxOutProof: 'verifytxoutproof', // litecoind v0.11.0+
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange',
  decodeOmniRawTransaction: 'omni_decodetransaction',
  signRawTransactionwithKey: 'signrawtransactionwithkey'
}
