export default function ProfileMenu({ setPage }: { setPage: Function }) {
  return (
    <>
      <div className="cursor-pointer" onClick={() => setPage("Identity")}>
        Identity
      </div>
      <div className="cursor-pointer" onClick={() => setPage("Security")}>
        Security
      </div>
      <div className="cursor-pointer">Log out</div>
    </>
  );
}
