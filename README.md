![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)


# Confessions Dapp

A Decentralized application working on ethereum or other EVM based chains where any user can post anonymus confessions.


## Author

- [@aritroCoder](https://www.github.com/aritroCoder)


## Run Locally

Clone the project

```bash
  git clone https://github.com/aritroCoder/confessions-smart-contract
```

Go to the project directory

```bash
  cd confessions-smart-contract
```

Install dependencies

```bash
  yarn install
```

Make your changes in the contract file, then compile the contract using

```bash
  yarn hardhat compile
```
or,
```bash
  hh compile
```
To run the contract, you can use [remix](https://remix.ethereum.org/), or follow the deployment instructions


## Environment Variables

To deploy this project, you will need to create and add the following environment variables to your .env file:

`GOERLI_RPC_URL`

`PRIVATE_KEY`

You can get a `GOERLI_RPC_URL` from free services like alchemy and infura by signing up.
Use your test account's private key for `PRIVATE_KEY`. Don't run contracts on an account with real funds!

Additionally you might also add `ETHERSCAN_API_KEY` solely for verification purpose of the contract publically.



## Deployment

### Deploying on hardhat network

```bash
  yarn hardhat deploy
```
or 
```bash
  hh deploy
```

### Deploying on hardhat localhost (visible to your entire PC and you can connect other apps to this network like a actual blockchain)

If localhost blockchain is not running (this will deploy automatically)
```bash
  yarn hardhat node
```

If localhost is already running
```bash
  yarn hardhat deploy --network localhost
```

You can replace `yarn hardhat` with only `hh` in all commands.

### Deploying on testnets

```bash
  yarn hardhat deploy --network goerli
```

For deploying in other testnets, add its `RPC_URL` in .env, then add its entry in `hardhat.config.js` file(in the `networks` object, similiar to goerli)

### Deploying on mainnet

The process is similiar
```bash
  yarn hardhat deploy --network mainnet
```
NOTE: This command will cost real money. Use with caution


## Learning Reference

- Learn [solidity](https://docs.soliditylang.org/en/v0.8.7/)
- Learn about [hardhat](https://hardhat.org/docs)
- [Solidity by example](https://solidity-by-example.org/)


## Contributing

Contributions are always welcome!

You can start by opening an issue or creating a PR.

