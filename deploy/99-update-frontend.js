const { ethers, network } = require('hardhat')
const fs = require('fs')
const { getContractAddress } = require('ethers/lib/utils')

const FRONTEND_ADDRESS_FILE = './constants/contractAddresses.json'
const FRONTEND_ABI_FILE = './constants/abi.json'

module.exports = async function () {
    if (process.env.UPDATE_FRONTEND) {
        console.log('updating front end...')
        await updateContractAddresses()
        await updateabi()
    }
}

async function updateabi() {
    const confessionDapp = await ethers.getContract('ConfessionDapp')
    fs.writeFileSync(FRONTEND_ABI_FILE, confessionDapp.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
    const confessionDapp = await ethers.getContract('ConfessionDapp')
    const chainId = network.config.chainId.toString()
    const currentAddresses = JSON.parse(fs.readFileSync(FRONTEND_ADDRESS_FILE, 'utf8'))
    if (chainId in currentAddresses) {
        if (!currentAddresses[chainId].includes(confessionDapp.address)) {
            currentAddresses[chainId].push(confessionDapp.address)
        }
    } else {
        currentAddresses[chainId] = [confessionDapp.address]
    }
    fs.writeFileSync(FRONTEND_ADDRESS_FILE, JSON.stringify(currentAddresses))
}

module.exports.tags = ['all', 'frontend']
