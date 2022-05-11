require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cVFJZAJ7VA0q3cn5yAKSZJIy48wm0Ofg',
      accounts: [
        '2cb52765c2f15baa56cd83c9ee015a7f1c21a0b479b9a1ed4c8023a8a6f4d99f',
      ],
    },
  },
}

