const dropjs = require("@dropilcoin/dropjs")

let startParams = {
  chainId: 'dropilchain-testnet', // String
  lcdUrl: 'http://192.168.1.47:1317', // String
  hdPath: "m/44'/118'/0'/0/0", // String
  bech32Prefix: 'drop', // String
  denom: 'udrop', // String
  powerReduction: 1000000, // int
  baseFee: '1000000', // String
  baseGas: '200000', // String
}

let drop = dropjs.start(startParams)

let wallet = await drop.generateWallet()

console.log(wallet)
