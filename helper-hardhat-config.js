const { ethers } = require("hardhat")

const networkConfig = {
    4: {
        name: "rinkeby",
        // vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        // entranceFee: ethers.utils.parseEther("0.1"),
        // gasLane:
        // "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        // subscriptionId: "8592",
        // callbackGasLimit: "500000",
        // interval: "30",
        // mintFee: ethers.utils.parseEther("0.01"),
        // ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    31337: {
        name: "hardhat",
        // entranceFee: ethers.utils.parseEther("0.1"),
        // gasLane:
        // "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        // callbackGasLimit: "500000",
        // interval: "30",
        // ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        // mintFee: "1000000000000000",
    },
}
const developmentChains = ["hardhat", "localhost"]
// const DECIMALS = "18"
// const INITIAL_PRICE = "200000000000000000000"
module.exports = {
    networkConfig,
    developmentChains,
    // DECIMALS,
    // INITIAL_PRICE,
}
