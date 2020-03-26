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

//optie 1: Await werkt alleen in async functie, dus moet ge een async fucntie declaren en uitvoeren.
let drop = dropjs.start(startParams)

const start = async function() {
let wallet = await drop.generateWallet()
console.log(wallet)
}
start()

//optie 2: Werk rechtstreeks met de Promise door then/catch syntax te gebruiken
let drop = dropjs.start(startParams)
drop.generateWallet()
  .then((wallet) => {
    console.log(wallet)
})

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("mnemonic? ", function(mnemonic) {
    console.log('${mnemonic} is entered');
    rl.close();    
});

rl.on("close", function() {
    process.exit(0);
});
