# Ethereal Web3 Project

Ethereal Web3 is a modern decentralized application (dApp) built using **Next.js 15** and the **RainbowKit** library for seamless wallet connection. This project leverages Web3 technologies to interact with blockchain networks, providing users with a smooth and intuitive experience.

## Features
- **Next.js 15** for server-side rendering and optimized performance.
- **RainbowKit** for wallet connection, supporting multiple wallets like MetaMask, Coinbase Wallet, and Rainbow Wallet.
- Fully customizable Web3 components.
- Environment configuration for secure and flexible deployment.

## Prerequisites
- Node.js v16 or later
- PNPM package manager
- A Web3 wallet (e.g., MetaMask, Rainbow Wallet)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/rifkiandriyanto/ethereal-web3
cd ethereal-web3
```

### 2. Install Dependencies
Install the required dependencies using PNPM:
```bash
pnpm install
```

### 3. Configure Environment Variables
Copy the `.env.example` file to `.env.local` and update the environment variables as needed:
```bash
cp .env.example .env.local
```

Update the following variables in `.env.local`:
```
NEXT_PUBLIC_PROJECT_ID=your-wallet-connect-project-id
```

- **`NEXT_PUBLIC_PROJECT_ID`**: Your WalletConnect Project ID for enabling wallet connections.

Refer to the [RainbowKit documentation](https://www.rainbowkit.com/docs) for more information on setting up these keys.

### 4. Run the Development Server
Start the development server with the following command:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Project Structure
```
ethereal-web3/
├── app/
│   ├── (default)/
│   │   ├── layout.tsx         # Root layout for the default route
│   │   ├── page.tsx           # Main page component
│   ├── api/                   # API route handlers
│   ├── css/                   # Global styles
├── public/                    # Static assets
├── components/                # Reusable React components
├── providers/                 # Context and state providers
├── .env.example               # Example environment file
├── .env.local                 # Local environment file
├── README.md                  # Project documentation
└── package.json               # Project metadata and dependencies
```

## Wallet Connection with RainbowKit
This project uses **RainbowKit** to provide a seamless wallet connection experience. RainbowKit is integrated to support multiple wallets, including:
- MetaMask
- Coinbase Wallet
- Rainbow Wallet
- WalletConnect

### How to Customize Wallet Connection
You can modify the wallet connection settings in your provider setup. Refer to the official [RainbowKit documentation](https://www.rainbowkit.com/docs) for detailed customization options.

## Scripts
- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the project for production.
- `pnpm start`: Runs the production build.
- `pnpm lint`: Lints the codebase.

## Deployment
To deploy the application, follow these steps:
1. Build the project:
   ```bash
   pnpm build
   ```
2. Deploy the `.next` folder to your preferred hosting platform (e.g., Vercel, Netlify, AWS).

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
