const { network, ethers } = require('hardhat')
const { developmentChains } = require('../helper-hardhat-config')
const { verify } = require('../utils/verify')

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const confessionDapp = await deploy('ConfessionDapp', {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log('Verifying...')
        await verify(confessionDapp.address)
    }
    log('--------------------------------------------------')
}

module.exports.tags = ['all', 'raffle']
