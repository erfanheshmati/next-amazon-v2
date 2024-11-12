export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow container mx-auto px-4 my-4 max-w-7xl">
      {children}
    </main>
  );
}
