export const metadata = {
  title: "Playground Finder",
  description: "Find nearby playgrounds with toilets, coffee and kid-friendly features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
