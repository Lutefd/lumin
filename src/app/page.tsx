import { getServerAuthSession } from "@/server/auth";
import HomeHeader from "@/components/home/HomeHeader";
import ValueProposition from "@/components/home/ValueProposition";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <HomeHeader />
      <ValueProposition />
    </>
  );
}
