export default function ShadowBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] w-40 outline-none p-4">
      {children}
    </div>
  );
}
