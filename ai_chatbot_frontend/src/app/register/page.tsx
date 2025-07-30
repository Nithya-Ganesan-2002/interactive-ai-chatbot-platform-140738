export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col min-h-[60vh] justify-center">
      <div className="rounded-lg bg-gray-50 shadow p-8 flex flex-col gap-5">
        <h1 className="text-xl font-bold">Register</h1>
        {/* Placeholder form (not functional) */}
        <input
          type="text"
          className="rounded border p-2 text-sm"
          placeholder="Username"
          disabled
        />
        <input
          type="email"
          className="rounded border p-2 text-sm"
          placeholder="Email"
          disabled
        />
        <input
          type="password"
          className="rounded border p-2 text-sm"
          placeholder="Password"
          disabled
        />
        <button className="w-full mt-4 bg-blue-600/90 hover:bg-blue-700/90 text-white py-2 rounded font-medium disabled:opacity-60" disabled>
          Create Account
        </button>
      </div>
      <div className="mt-6 text-xs text-gray-500 text-center">
        Already have an account? <a className="text-blue-700 underline" href="/login">Login</a>
      </div>
    </div>
  );
}
