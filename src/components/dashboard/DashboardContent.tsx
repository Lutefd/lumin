import UploadButton from "./UploadButton";

export default function DashboardContent() {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 text-5xl font-bold text-gray-900">Meus Arquivos</h1>
        <UploadButton />
      </div>
      {/* display user files */}
    </main>
  );
}
