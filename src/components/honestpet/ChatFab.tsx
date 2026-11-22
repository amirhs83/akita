import { MessageSquare } from "lucide-react";

export default function ChatFab() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed bottom-5 right-4 z-[900] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#B678EE] text-white shadow-[0_10px_26px_rgba(150,90,220,0.45)] transition-transform duration-150 hover:scale-105 hover:bg-[#AB66E8] active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageSquare className="h-7 w-7" strokeWidth={2.2} />
    </button>
  );
}
