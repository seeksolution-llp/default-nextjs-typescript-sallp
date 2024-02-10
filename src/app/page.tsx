// import AuthLayout from "@/components/auth/AuthLayout";
import dynamic from "next/dynamic";
import Image from "next/image";
const AuthLayout = dynamic(()=>import("@/components/auth/AuthLayout"),{ ssr:false})

export default function Home() {
  return (
  <> I am Default page
  </>
  );
}
