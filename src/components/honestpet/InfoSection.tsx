import { infoSections } from "@/data/puppies";

export default function InfoSection() {
  const s = infoSections;
  return (
    <section className="bg-[#F6F1E8]">
      <div className="mx-auto max-w-[880px] px-6 py-16 md:px-8">
        {/* Intro */}
        <h2 className="mb-6 text-center text-[2.2rem] font-bold leading-tight text-[#1B2653]">{s.intro.title}</h2>
        <p className="mb-12 text-center text-[17px] leading-relaxed text-[#475069]">{s.intro.text}</p>

        {/* Why trust */}
        <h2 className="mb-4 text-[1.8rem] font-bold text-[#1B2653]">{s.whyTitle}</h2>
        <p className="mb-6 text-[17px] text-[#475069]">{s.whyLead}</p>

        {s.blocks.map((b) => (
          <div key={b.h} className="mb-6">
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#1B2653]">{b.h}</h3>
            <p className="text-[17px] leading-relaxed text-[#475069]">{b.p}</p>
          </div>
        ))}

        {/* Flexible options */}
        <h2 className="mb-4 mt-10 text-[1.8rem] font-bold text-[#1B2653]">{s.flexTitle}</h2>
        <ul className="mb-10 list-disc space-y-4 pl-8">
          {s.flexItems.map((it) => (
            <li key={it.b} className="text-[17px] leading-relaxed text-[#475069]">
              <strong className="font-bold text-[#1B2653]">{it.b}</strong> {it.p}
            </li>
          ))}
        </ul>

        {/* Steps */}
        <h2 className="mb-4 text-[1.8rem] font-bold text-[#1B2653]">{s.stepsTitle}</h2>
        <p className="mb-6 text-[17px] text-[#475069]">{s.stepsLead}</p>
        <ul className="mb-10 list-disc space-y-4 pl-8">
          {s.steps.map((it) => (
            <li key={it.b} className="text-[17px] leading-relaxed text-[#475069]">
              <strong className="font-bold text-[#1B2653]">{it.b}</strong> {it.p}
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <h2 className="mb-6 text-[1.8rem] font-bold text-[#1B2653]">{s.faqTitle}</h2>
        <div className="space-y-6">
          {s.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="mb-2 text-[1.25rem] font-bold text-[#1B2653]">{f.q}</h3>
              <p className="text-[17px] leading-relaxed text-[#475069]">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
