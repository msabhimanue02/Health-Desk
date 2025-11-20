// components/BrandTrust.tsx
import Image from "next/image";

const labels = ["All Natural", "Cruelty-Free", "Money-back Guarantee", "Giving Back", "Non-GMO"];

export default function BrandTrust() {
  return (
    <section className="py-16">
      <div className="mx-auto container-max px-6">
        <div
          className="rounded-[32px] px-10 py-14 text-center shadow-[0_30px_60px_rgba(15,23,42,0.08)] border border-white/60"
          style={{ backgroundImage: "url(/trust-banner.png)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">A Brand That You Can Trust</h2>
          <p className="text-lg text-slate-700 mb-12">Our results-driven supplements are made with premium &amp; safe ingredients</p>

          <div className="flex justify-center mb-6">
            <Image src="/brand-trust.png" alt="Trust badges" width={620} height={120} className="w-full max-w-[620px]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-lg font-semibold text-[#1f6bd8] max-w-[620px] mx-auto">
            {labels.map((label) => (
              <div key={label} className="text-center">
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
