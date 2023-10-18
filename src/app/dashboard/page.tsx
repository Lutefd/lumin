import DashboardContent from "@/components/dashboard/DashboardContent";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <DashboardContent />
    </div>
  );
}
