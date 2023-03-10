require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-deploy')
require('solidity-coverage')
require('hardhat-gas-reporter')
require('hardhat-contract-sizer')
require('dotenv').config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
        mainnet: {
            chainId: 1,
            blockConfirmations: 10,
            url: MAINNET_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
        },
        customChains: [
            {
                network: 'goerli',
                chainId: 5,
                urls: {
                    apiURL: 'https://api-goerli.etherscan.io/api',
                    browserURL: 'https://goerli.etherscan.io',
                },
            },
        ],
    },
    // gasReporter: {
    //     enabled: true,
    //     currency: 'INR',
    //     outputFile: 'gas-report.txt',
    //     noColors: true,
    //     coinmarketcap: COINMARKETCAP_API_KEY,
    // },
    solidity: '0.8.7',
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    // below code for tests
    mocha: {
        timeout: 3000000,
        // 3000 seconds max
    },
}
