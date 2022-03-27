require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski story rate rural solid goddess light army gift'; 
let testAccounts = [
"0x4fbb44883c2bd019e0fc98eefa7a41078a2884b107920fafb640fbdd1bd3809d",
"0x8367b01815f5296f234bd90d233e57376fbd7a945a2dbd19334c77bd6c26465e",
"0x941232951ca065f16f9770057550cb2cd4ae5594b7a8c256109a64f0019662e2",
"0x76dec5cac8247eb78485b774c8e8e7f8743e1c3a3115bb94bf2ac8bf3edc612e",
"0x78ffee82edc4c46a5f9e2cb910d48ea5250ed15c6ec896ee47e7dd00cd4566c6",
"0x23a4b1252b0363f5d6fba1c11c183d6ddd0c289f5d985ad5ae7f028f9cad4f2f",
"0x5cf056133db02d0e057d19096c74bc4c48c75f76930db474be48cd3dd529cbc2",
"0x6116824b200868a528989887a7b77384be25e79ce1ec8c52a7ec1f6dabc9d680",
"0x1ce15bafda487b78c50c17727dd79514d5c3bf09cf980c8afb8959b58f934c44",
"0x9a5973763196bd869fa54d4df9102419b39db1b8c14354e35c2e5b831b89e552"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

