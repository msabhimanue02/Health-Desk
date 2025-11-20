// components/InfoSections.tsx
import Image from "next/image";

export default function InfoSections() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto container-max space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Health Care Desk</h2>
          <h3 className="text-3xl font-semibold text-slate-900 mb-5">The Future Of Smart Health</h3>
          <p className="text-[22px] text-black max-w-4xl mx-auto leading-relaxed text-justify">
            At Health Care Desk, we are committed to producing supplements that harness the power of all-natural
            superfoods. Our products help support the body&apos;s natural processes, improving our customers&apos; quality of
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-[420px] w-full mx-auto h-[320px]">
            <Image src="/section-fruits.png" alt="Natural components" width={520} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="text-left self-stretch flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-4xl font-semibold text-black mb-1">100% Natural Components</h3>
              <p className="text-base font-semibold text-black mb-3">Nature-Powered Wellness You Can Trust</p>
              <p className="text-xl text-[#0a0a0a] leading-relaxed text-justify">
                We harness the goodness of nature to create supplements enriched with premium, research-backed superfood
                extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health
                benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory
                compliance, ensuring every product you choose is both effective and trustworthy.
              </p>
            </div>
            <button className="inline-flex w-[150px] items-center justify-center rounded-md border border-[#3c8bff] px-6 py-2 text-sm font-semibold text-[#1f6bd8] bg-white transition hover:bg-[#1f6bd8] hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-left self-stretch flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-4xl font-semibold text-black mb-1">Research-Backed Formulations</h3>
              <p className="text-base font-semibold text-black mb-3">Formulated with Clinically Tested Ingredients</p>
              <p className="text-xl text-[#0a0a0a] leading-relaxed text-justify">
                We combine the expertise of our physicians with the latest health data and medical research, ensuring
                every supplement is thoughtfully formulated for maximum benefit.
              </p>
            </div>
            <button className="inline-flex w-[150px] items-center justify-center rounded-md border border-[#3c8bff] px-6 py-2 text-sm font-semibold text-[#1f6bd8] bg-white transition hover:bg-[#1f6bd8] hover:text-white">
              Learn More
            </button>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg max-w-[420px] w-full mx-auto h-[320px]">
            <Image src="/section-lab.png" alt="Research Lab" width={520} height={360} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-[420px] w-full mx-auto h-[320px]">
            <Image src="/section-factory.png" alt="Eco Manufacturing" width={520} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="self-stretch flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-4xl font-semibold text-black mb-1">Eco-Conscious Manufacturing</h3>
              <p className="text-base font-semibold text-black mb-3">Sustainable From Source To Shelf</p>
              <p className="text-xl text-[#0a0a0a] leading-relaxed text-justify">
                Our supplements are crafted in certified facilities that meet and exceed industry standards—ensuring
                exceptional quality while minimizing environmental impact. Through eco-friendly processes and a
                commitment to reducing our carbon footprint, we create wellness solutions that are as good for the
                planet as they are for you.
              </p>
            </div>
            <button className="inline-flex w-[150px] items-center justify-center rounded-md border border-[#3c8bff] px-6 py-2 text-sm font-semibold text-[#1f6bd8] bg-white transition hover:bg-[#1f6bd8] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
