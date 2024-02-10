import dynamic from "next/dynamic";

const DynamicContent = dynamic(
  () => import("@/components/content/DynamicContent"),
  {
    ssr: false,
  }
);

const ContentPage = () => {
  return <DynamicContent />;
};

export default ContentPage;
