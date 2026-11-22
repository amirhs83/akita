import { MessageSquare } from "lucide-react";

export default function ChatFab() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed bottom-5 right-4 z-[900] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#7DE95D] text-[#0A4D23] shadow-[0_10px_26px_rgba(90,200,60,0.45)] transition-transform duration-150 hover:scale-105 hover:bg-[#6FD94F] active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageSquare className="h-7 w-7" strokeWidth={2.2} />
    </button>
  );
}
