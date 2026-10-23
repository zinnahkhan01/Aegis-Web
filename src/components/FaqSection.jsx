import React, { useState } from "react";
import { FAQ_DATA } from "../data/faqData";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState(FAQ_DATA[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070b16] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-violet-400" />
            <span>KNOWLEDGE BASE & GUIDELINES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#00F2FF] to-violet-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about setting up Supervex AI, managing your Gemini API keys, pairing your Android phone, and safeguarding your files.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0a0f1d] border-[#00F2FF]/40 shadow-glow-cyan/15"
                    : "bg-[#0a0f1d]/60 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? "text-[#00F2FF]" : "text-slate-100 hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#00F2FF]/20 text-[#00F2FF]" : "bg-white/5 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
