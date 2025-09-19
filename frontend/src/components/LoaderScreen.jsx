import { Loader,MessageSquare } from "lucide-react";

const LoaderScreen = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1D232A] bg-opacity-90 z-50">
    <MessageSquare className="w-25 h-25 text-[#2EBDC7]/70" />
    <h1 className="mt-4 text-cyan-400 text-lg font-serif">Welcome to Zyra – Just a moment...</h1>
    <Loader className="w-10 h-10 mt-2 text-cyan-200 animate-spin" />
  </div>
);

export default LoaderScreen;
