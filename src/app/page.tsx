import { getServerAuthSession } from "@/server/auth";
import HomeHeader from "@/components/home/HomeHeader";
import ValueProposition from "@/components/home/ValueProposition";
import FeaturesSection from "@/components/home/FeaturesSection";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <HomeHeader />
      <ValueProposition />
      <FeaturesSection />
    </>
  );
}
