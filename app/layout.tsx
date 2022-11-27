import "../styles/globals.css";
import { Work_Sans } from "@next/font/google";

const work_Sans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={work_Sans.className}>{children}</body>
    </html>
  );
}
