# DunkVerse

**DunkVerse** is a blockchain-powered sports engagement platform that combines AI-generated quizzes, NFT auctions, GameFi, and SocialFi to create an immersive and interactive experience for sports fans.

Integrated **Flow Blockchain** to:
- Mint AI-generated **NBA TopShots NFTs** as rewards for quiz winners and auction participants.
- Enable seamless and cost-effective NFT transactions using Flow’s Cadence and Solidity smart contracts.
- Utilize Flow’s scalable infrastructure to handle real-time quiz participation and leaderboard tracking efficiently.

The integration was done by:
- Writing contracts for minting, transferring, and managing NFTs.
- Leveraging Flow’s API and SDK for seamless user onboarding and NFT interactions.
- Deploying contracts on the Flow Testnet and connecting them to the frontend.

## Features 🚀

### 1. **NFT-Powered Content**
- Videos uploaded by users are automatically minted as NFTs.
- NFTs can be auctioned in a decentralized betting pool, with the highest or smartest bidder winning the asset.
- Live story-like features enable dynamic viewing experiences for fans.

### 2. **AI-Generated Quizzes**
- Quizzes are generated based on real-time NBA TopShots matches, focusing on the players and teams participating in the current game.
- Fans can win NFTs and other rewards by participating in these interactive quizzes.

### 3. **Unified Token Economy**
- Transactions are powered by **$FTO (DunkVerse Token)**, which is equivalent to:
  - 1 $FLOW
- Simplifies transactions on each chain and promotes ecosystem interoperability.

### 4. **Decentralized Betting Pool**
- Fair and transparent NFT auctions ensure trust among bidders.
- Smart contracts govern the auction process to ensure security.

### 5. **Social Connectivity**
- Invite friends using **On-chain wallet ping**.
- Real-time leaderboard displays top-performing players in live quizzes.
- View the average market value of NFTs on the platform.

## Deployed Contracts

| Contract Name        | Description                                   | EVM on Flow Testnet Deployed Contract Links                                            |
|----------------------|-----------------------------------------------|-----------------------------------------------------------------------------------|
| `DunkVerse.sol`      | ERC-20 token contract for $FTO.               | https://evm-testnet.flowscan.io/address/0xaD488Cd332034434240828F987d6E6B991D48125 |
| `BettingPool.sol`    | Handles GameFi betting logic.                 | https://evm-testnet.flowscan.io/address/0x7c3c1894704C2eFA041Aca6975053545F500BdE0 |
| `AIGeneratedNFT.sol` | Manages NFT generation, supply, and transfers.| https://evm-testnet.flowscan.io/address/0xa35Bd929a3554bf07908e3131a7Df305849Cd25F |
| `InviteFriends.sol`  | Manages on-chain invitation and rewards.      | https://evm-testnet.flowscan.io/address/0xBdb5bDc633Dec3F7D288C1b93b775A80fFE1aD40 |

## Key Technologies

- **Blockchain**: Flow
- **AI**: DALL-E3 GPT OpenAI Models for real-time quiz generation
- **Oracles**: Third-party oracles API for live Top Shots NBA match data
- **Smart Contracts**: Solidity, Cadence
- **Frontend**: React.js, TypeScript, TailwindCSS
- **Storage**: Pinata
- **Wallet Integration**: RainbowKit, Wagmi, Metamask APIs
- **Tokenomics**: ERC-20, ERC-721 standard for $FTO token and NFTs

## Tokenomics on Flow 📊

- **Symbol**: $FTO (DunkVerse Token)
- **Supply**: 10 billion tokens
- **Utility**:
  - Place bids in NFT auctions.
  - Participate in quizzes.
  - Peer-to-peer transactions for social and gaming features.

## How It Works

1. **User Onboarding**:
   - Connect Wallet via MetaMask.
   - Receive $FTO tokens if you have a metamask-to-metamask invitation.

2. **Participation**:
   - Join AI-generated quizzes.
   - Bet on outcomes using $FTO.

3. **Rewards**:
   - Win AI-generated NFTs and leaderboard points.
   - Redeem rewards directly in the ecosystem.

4. **Social Engagement**:
   - Invite friends and earn rewards.
   - Compete on the leaderboard.

## Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/AmaanSayyad/DunkVerse-Flow.git
   ```
2. Install dependencies:
   ```bash
   cd DunkVerse
   yarn install
   ```
3. Start the frontend:
   ```bash
   yarn run dev
   ```
4. Access the application at `http://localhost:3000`.

## **Future Enhancements**
- Enable more complex betting logic, build 16 new features and launch v2 in the telegram mini-app.
- Integrate $FTO token with Apple Pay & card payments via Stripe/ 3rd party services.
- Bring partnerships with NBA teams, NBA TopShots, Chiliz and 20+ New Protocol Integration.
- Scale to global sports events beyond NBA.
- Expanding the AI-generated quiz system to cover multiple sports and leagues.
- Enhanced UI/UX for seamless user onboarding.

## Team Description
- **Jeremy**: Frontend Developer ([Telegram](https://t.me/jeremythewizard))
- **Juan**: Designer ([Telegram](https://t.me/jmespejel))
- **Amaan**: Contract Developer ([Telegram](https://t.me/amaan029))

Our team combines expertise in blockchain, smart contracts, and frontend development to deliver a robust and engaging platform for sports fans.
## Connect. Play. Win.

Be the Biggest SportsFi Dapp, combining Sports, SocialFi, NFTs, GameFi, AI, DeFi, and polymarket prediction all inside Mobile Friendly Mode.
