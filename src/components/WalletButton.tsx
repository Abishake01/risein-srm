import { Wallet, Check } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

const WalletButton = () => {
  const { isConnected, address, connect, disconnect } = useWallet();

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isConnected
          ? 'bg-cyan-600 text-blue-300 border border-cyan-500 hover:bg-cyan-400'
          : 'bg-cyan-400 text-black hover:bg-blue-400 shadow-lg shadow-cyan-600/30'
      }`}
    >
      {isConnected ? (
        <>
          <Check className="h-4 w-4" />
          <span className="hidden sm:inline">
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
          </span>
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
        </>
      )}
    </button>
  );
};

export default WalletButton;