import dynamic from "next/dynamic";
const StickyHomeLayout = dynamic(() => import("@/components/home/StickyHomeLayout"), { ssr: false })
const HomePage = dynamic(() => import("@/components/home/HomePage"), { ssr: false })

export default function Home() {
  return (
    <StickyHomeLayout>
      <HomePage />
    </StickyHomeLayout>
  );
}
