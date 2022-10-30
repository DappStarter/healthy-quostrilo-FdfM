require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note shift pupil inflict phone olympic sudden'; 
let testAccounts = [
"0x45ed722ae4b8177ce59874b027a2b33d4d2d13b27a414d02b0f9d0755dc699f2",
"0xd13926ec2a5c4e1333d4254bef12445b4e1965e09d2aa0e9419c719d7a7743ba",
"0x2c14202bc1386ba11ac6f4df125f111a0b4fe4880c8e85064599783330a7c6eb",
"0xce942ab5950187a887726ff023c861d4e613748b6b5aaf26a39d536390a0bc77",
"0x78862566d407c245441fa4336e35618882a21e8cfe59d1fa6a353c01f4ebeba0",
"0x30982251a68e18e10a16e432165251316173e98605905149d94c61bf190fd615",
"0xd4d737a20bbfc5b7d273f7c54f90a05b65cbbf74784c731c2d75dead7228972a",
"0xb132672cc676756aa3a2cb0fc49d84fcae5cc7f22441363c4ec6370d5b814afb",
"0xcaf84b4c2ad00f32d6cd3661ed8e4ff9c799ef7588a126187fe17ecab858c054",
"0x725763862a9fee714fa741b43904008991bf6448f6f4aedb4069d83776849b23"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

