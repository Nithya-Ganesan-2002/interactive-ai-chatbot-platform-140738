export default function Home() {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col min-h-[50vh] justify-center items-center text-center gap-5">
      <h1 className="text-3xl font-bold mb-2">Welcome to AI Chatbot Platform</h1>
      <p className="text-gray-500 text-base">
        This is a modern conversational AI platform. Use the navigation bar above to log in, chat live with the AI, view your chat history, or manage your profile.
      </p>
      <div className="pt-6 text-xs text-gray-400">
        The AI chatbot will be available as soon as you log in. Explore the features to get started!
      </div>
    </div>
  );
}
