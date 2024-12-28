export const ChainId = {
  
  FLOW_TESTNET: 545,
  
};

export const supportedChains = [
  
  ChainId.FLOW_TESTNET,
  
];

export const getRPCProvider = (chainId: number): string => {
  switch (chainId) {
    
    case ChainId.FLOW_TESTNET:
      return "https://testnet.evm.nodes.onflow.org";
    
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
};

export const getExplorer = (chainId: number): string => {
  switch (chainId) {
    
    case ChainId.FLOW_TESTNET:
      return "https://evm-testnet.flowscan.io";
    
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
};