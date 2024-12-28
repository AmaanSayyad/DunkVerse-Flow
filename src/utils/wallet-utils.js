import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const flowTestnet = {
  id: 545,
  name: 'EVM on Flow Testnet',
  network: 'flowTestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'FLOW',
    symbol: 'FLOW',
  },
  rpcUrls: {
    public: { http: ['https://testnet.evm.nodes.onflow.org'] },
    default: { http: ['https://testnet.evm.nodes.onflow.org'] },
  },
  iconUrl: 'https://cryptologos.cc/logos/flow-flow-logo.png',
  icon: {
    url: 'https://cryptologos.cc/logos/flow-flow-logo.png',
    width: 512,
    height: 512,
    format: 'png'
  },
  blockExplorers: {
    default: { url: 'https://evm-testnet.flowscan.io' }
  }
};


// Configure chains and providers
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [flowTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        switch (chain.id) {
          
          case flowTestnet.id:
            return { http: 'https://testnet.evm.nodes.onflow.org' };
          
          default:
            return null;
        }
      },
    }),
  ]
);

// Configure wallet connectors
const { connectors } = getDefaultWallets({
  appName: 'DunkVerse',
  projectId: '87106bd465234d097b8a51ba585bf799',
  chains,
});

// Create Wagmi configuration
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains, wagmiConfig };
