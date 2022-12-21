const networkConfig = {
    default: {
        name: 'hardhat',
    },
    1: {
        name: 'mainnet',
    },
    5: {
        name: 'goerli',
    },
    31337: {
        name: 'hardhat',
    },
}

const developmentChains = ['hardhat', 'localhost']

module.exports = { networkConfig, developmentChains }
