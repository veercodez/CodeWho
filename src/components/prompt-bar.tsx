import React, { useState } from "react";
import { Button } from "@/components/ui/moving-border";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

export default function PromptBar() {
  const [prompt, setPrompt] = useState("");

  const handleBuild = () => {
    // Handle build action here
    console.log("Building with prompt:", prompt);
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
      <div className="relative flex items-center gap-2">
        <Input
          type="text"
          placeholder="Describe your app idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-black/40 border-neutral-600 text-white placeholder:text-neutral-400 rounded-full px-6 py-6 text-lg backdrop-blur-xl"
        />
        <Button
          onClick={handleBuild}
          className="!bg-black/40 text-white border-neutral-600 hover:bg-black/50 transition-colors"
          containerClassName="shrink-0"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Build
        </Button>
      </div>
    </div>
  );
}