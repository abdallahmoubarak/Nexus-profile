import ShadowBox from "@/components/ShadowBox";

export default function WalletMenu({ setPage }: { setPage: Function }) {
  return (
    <ShadowBox>
      {menuItems.map((item) => (
        <div className="cursor-pointer" onClick={() => setPage(item)}>
          {item}
        </div>
      ))}
    </ShadowBox>
  );
}
const menuItems = ["Wallet", "Transactions", "Subscriptions"];
