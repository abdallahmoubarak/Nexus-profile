import ShadowBox from "@/components/ShadowBox";

export default function SearchMenu({ setPage }: { setPage: Function }) {
  return (
    <div className="flex flex-col gap-4">
      <ShadowBox>
        {menuItems.map((item) => (
          <div className="cursor-pointer" onClick={() => setPage(item)}>
            {item}
          </div>
        ))}
      </ShadowBox>
      <ShadowBox>
        {tradeOptions.map((item) => (
          <div className="cursor-pointer" onClick={() => setPage(item)}>
            {item}
          </div>
        ))}
      </ShadowBox>
      <ShadowBox>
        <div className="flex justify-between">
          <div>Price</div>
          <div>1X/hour</div>
        </div>
      </ShadowBox>
      <ShadowBox>
        <div className="flex justify-between">
          <div>Row</div>
          <div>80</div>
        </div>
      </ShadowBox>
    </div>
  );
}
const menuItems = ["My Ads", "My Spaces", "Space Marketplace"];
const tradeOptions = ["Rent", "Buy"];
