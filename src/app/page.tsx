import { getServerAuthSession } from "@/server/auth";
import HomeHeader from "@/components/home/HomeHeader";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <HomeHeader />
    </>
  );
}
