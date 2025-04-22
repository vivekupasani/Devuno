import "prismjs/themes/prism-solarizedlight.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ArrowRight,
  Code,
  FileCheck,
  Github,
  Linkedin,
  SendIcon,
  Twitter,
  Terminal,
} from "lucide-react";

import prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "highlight.js/styles/github.css";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "prismjs/components/prism-c";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";

const Ground = () => {
  const [code, setCode] = useState(`function hello(){
    console.log("Hello world");
}`);
  const [aiResponse, setAiResponse] = useState(
    `AI Analysis will appear here...`
  );
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [isLoading, setIsLoading] = useState(false);

  const programmingLanguages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "typescript", label: "TypeScript" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
  ];

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const handleSubmit = async () => {
    if (code.trim() === "") return;

    setIsLoading(true);
    setAiResponse("Loading...");

    const data = {
      contents: code,
    };
    const res = await axios.post("http://localhost:8080/api/v1/review", data);

    if (res.status === 200) {
      setIsLoading(false);
      setAiResponse(res.data.data);
    } else {
      setIsLoading(false);
      setAiResponse("Error: " + res.data.error);
    }
  };

  return (
    <div className="h-screen w-full bg-[#edecec] flex flex-col font-serif">
      {/* Minimal top bar */}
      <div className="flex gap-2 flex-col justify-between items-center px-6 py-3 bg-[#1e222c] border-b border-[#97999e] md:flex-row lg:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#101929] p-1.5 rounded-md">
            <Terminal size={18} className="text-white" />
          </div>
          <h1 className="text-lg font-bold text-white">
            DevunoAI{" "}
            <span className="text-xs text-[#97999e] font-normal">
              Playground
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivekupasani/Devuno"
            className="hidden md:flex lg:flex items-center gap-2 text-[#97999e] hover:text-white transition-colors text-sm"
          >
            <Github size={16} />
            <span className="hidden md:inline">Contribute</span>
          </a>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-[#101929] text-[#97999e] border border-[#97999e] rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white"
          >
            {programmingLanguages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          <button
            onClick={handleSubmit}
            className="bg-[#1e222c] text-white px-3 py-1 rounded text-sm hover:bg-[#101929] transition-colors flex items-center gap-1 border-2 border-[#97999e]"
          >
            <SendIcon size={14} />
            <span>Analyze</span>
          </button>
        </div>
      </div>

      {/* Code editors - full height */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left editor */}
        <div className="flex-1 flex flex-col border-r border-[#97999e] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-[#f7f7f7] border-b border-[#97999e]">
            <div className="flex items-center">
              <Code size={16} className="text-[#6b6b6b] mr-2" />
              <h3 className="text-sm font-semibold text-[#1e222c]">
                Your Code
              </h3>
            </div>
          </div>

          {/* SCROLLABLE EDITOR WRAPPER */}
          <div className="flex-1 overflow-auto">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(
                  code,
                  prism.languages[selectedLanguage],
                  selectedLanguage
                )
              }
              padding={10}
              className="min-h-full w-full font-mono text-sm bg-[#f7f7f7] outline-none"
              style={{
                whiteSpace: "pre",
                overflow: "auto",
              }}
            />
          </div>
        </div>

        {/* Right editor */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-[#f7f7f7] border-b border-[#97999e]">
            <div className="flex items-center">
              <FileCheck size={16} className="text-[#6b6b6b] mr-2" />
              <h3 className="text-sm font-semibold text-[#1e222c]">
                AI Analysis
              </h3>
            </div>
          </div>

          <div className="flex-1  overflow-auto p-5">
            <Markdown rehypePlugins={[rehypeHighlight]}>{aiResponse}</Markdown>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e222c] border-t border-[#97999e] text-xs text-[#97999e]">
        <div className="flex items-center gap-1">
          <ArrowRight size={12} className="text-white" />
          <span>
            Pro Tip: Include complete functions with proper indentation for best
            results
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>© 2025 DevunoAI</span>
          <div className="flex gap-2">
            <a
              href="https://github.com/vivekupasani"
              className="text-[#97999e] hover:text-white transition-colors"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/in/vivekupasani"
              className="text-[#97999e] hover:text-white transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href=""
              className="text-[#97999e] hover:text-white transition-colors"
            >
              <Twitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ground;
