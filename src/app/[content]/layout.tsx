import HomeLayout from "@/components/home/StickyHomeLayout";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeLayout>{children}</HomeLayout>
  );
}
