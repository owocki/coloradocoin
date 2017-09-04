var amount = 100 * 1000000000000000000; // 100 tokens
//mainnet
var contract_address = '0x2941deaad71adb02b944bd38ebce2f1f4c9a62dc';
//ropsten
//var contract_address = '0x2941deaad71adb02b944bd38ebce2f1f4c9a62dc';
var to_address = '0xe93d33CF8AaF56C64D23b5b248919EabD8c3c41E';

var cc = ColoradoCoin.at(contract_address);

var multiplier = 10;
var gasPrice = 660000000;
var gasPrice = 21000000000;
var gas = cc.mint.estimateGas(to_address, amount);
var gas = 66233 * multiplier;
var gasLimit = gas.valueOf() * multiplier;

var txid = cc.mint(to_address, amount, {gas: web3.toHex(gas), gasPrice: web3.toHex(gasPrice)});
