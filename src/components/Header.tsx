import { TonConnectButton } from '@tonconnect/ui-react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-3xl font-bold">Civitas-SCI</h1>
      <TonConnectButton />
    </header>
  );
};