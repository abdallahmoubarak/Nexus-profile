export default function WalletMenu({ setPage }: { setPage: Function }) {
  return (
    <>
      <div className="cursor-pointer" onClick={() => setPage("Wallet")}>
        Wallet
      </div>
      <div className="cursor-pointer" onClick={() => setPage("Transactions")}>
        Transactions
      </div>
      <div className="cursor-pointer" onClick={() => setPage("Subscriptions")}>
        Subscriptions
      </div>
    </>
  );
}
