export default function ProfilePage() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center min-h-[40vh] justify-center">
      <div className="rounded-lg bg-gray-50 shadow p-8 flex flex-col gap-4 w-full">
        <h1 className="text-xl font-bold mb-2">User Profile</h1>
        {/* Placeholder: In future, display actual profile details here */}
        <div className="flex flex-col gap-2">
          <div className="text-gray-500 text-sm">Username: <span className="ml-1 text-gray-900">-</span></div>
          <div className="text-gray-500 text-sm">Email: <span className="ml-1 text-gray-900">-</span></div>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          Profile management coming soon.
        </div>
      </div>
    </div>
  );
}
