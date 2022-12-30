export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-4 items-start flex-wrap">{children}</div>;
}
