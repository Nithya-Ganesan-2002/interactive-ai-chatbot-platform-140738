export default function ChatPage() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
      <div className="flex-1 flex flex-col gap-4 bg-gray-100/60 rounded-xl p-6 shadow">
        <div className="flex-1 space-y-2">
          <div className="text-gray-400 text-center text-sm py-4">
            {/* Placeholder for chat history */}
            Chat history will appear here.
          </div>
        </div>
        <form className="flex gap-2 mt-3">
          <input
            disabled
            type="text"
            className="flex-1 rounded border px-3 py-2 text-sm outline-none disabled:bg-gray-50"
            placeholder="Type your message..."
          />
          <button
            disabled
            type="submit"
            className="px-5 py-2 rounded text-white bg-blue-600/80 font-medium hover:bg-blue-700/90 transition disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
      <div className="mt-4 text-xs text-gray-500 text-center">
        Live messaging &amp; full chat history coming soon.
      </div>
    </div>
  );
}
