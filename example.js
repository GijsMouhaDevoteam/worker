const dropjs = require("@dropilcoin/dropjs")

let startParams = {
  chainId: 'Dropil-Chain-Poseidon', // String
  lcdUrl: 'http://192.168.1.47:1317', // String
  hdPath: "m/44'/495'/0'/0/0", // String
  bech32Prefix: 'drop', // String
  denom: 'udrop', // String
  powerReduction: 1000000, // int
  baseFee: '1000000', // String
  baseGas: '200000', // String
}

let drop = dropjs.start(startParams)

//let wallet = await drop.generateWallet()

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("mnemonic? ",, function(mnemonic) {
    console.log('${mnemonic} is entered');
    rl.close();    
});

rl.on("close", function() {
    process.exit(0);
});
