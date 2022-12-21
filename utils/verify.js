// we can't have these functions in our `helper-hardhat-config`
// since these use the hardhat library
// and it would be a circular dependency

/**
 * @dev Verify this contract on etherscan
 * Already verified at etherscan: https://goerli.etherscan.io/address/0x3d3C6c0a272Da8bBc75883D1579FbDB594781993#code
 */
const { run } = require("hardhat");

const verify = async (contractAddress) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
};

module.exports = {
  verify,
};
