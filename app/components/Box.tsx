export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 text-center">
      {children}
    </div>
  );
}
