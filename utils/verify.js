// we can't have these functions in our `helper-hardhat-config`
// since these use the hardhat library
// and it would be a circular dependency

/**
 * @dev Verify this contract on etherscan
 * Already verified at etherscan: https://goerli.etherscan.io/address/0x66Fe86341089f188Cf6aF5773c235729C8787CB1#code
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
