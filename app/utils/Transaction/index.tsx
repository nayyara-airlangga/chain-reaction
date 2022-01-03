const getNetworkChain = (networkChain: string) => {
  switch (networkChain) {
    case "0x1":
      return ""
    case "0x3":
      return "ropsten."
    case "0x4":
      return "rinkeby."

    case "0x5":
      return "goerli."

    case "0x2a":
      return "kovan."
    default:
      return "ropsten."
  }
}

export { getNetworkChain }
