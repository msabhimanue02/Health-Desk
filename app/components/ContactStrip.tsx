// components/ContactStrip.tsx
import Image from "next/image";

export default function ContactStrip() {
  return (
    <section className="bg-white pt-12">
      <div className="mx-auto container-max px-6">
        <div className="flex flex-col items-center gap-3 pb-10">
          <Image src="/footer-healthdesk.png" alt="Health Desk" width={120} height={34} />
          <button className="inline-flex items-center px-6 py-2 rounded-[6px] border border-[#5a8de6] text-[#1f6bd8] font-semibold">
            Follow Us
          </button>
          <Image src="/social-media.png" alt="Social icons" width={200} height={48} />
        </div>

        <div className="rounded-[24px] bg-[#f4f5f8] px-10 py-12 grid md:grid-cols-3 gap-10 mb-8 text-slate-900">
          <div>
            <h3 className="text-xl font-semibold mb-2">Have a Question?</h3>
            <p className="text-sm mb-4">Check out our FAQs where we answer the most commonly asked questions</p>
            <button className="px-6 py-2 rounded-md border border-[#5a8de6] text-[#1f6bd8] font-semibold">Read FAQs</button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <p className="text-sm mb-2">Enjoy free shipping for all orders.</p>
            <p className="text-2xl font-semibold">1-800-822-7777</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">We&apos;re Social</h3>
            <p className="text-sm">Like us, love us, follow us!</p>
          </div>
        </div>
      </div>

      <div className="bg-[#135bbd] text-white py-8">
        <div className="mx-auto container-max px-6 flex flex-col gap-4 md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: "#ffffff" }}>
              Let&apos;s Grow Together
            </h3>
            <p className="text-sm" style={{ color: "#ffffff" }}>
              We&apos;ll keep it simple. Only the news and updates you need.
            </p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full md:w-96 px-4 py-3 text-sm text-white placeholder-white bg-transparent border border-white"
            />
            <button type="submit" className="px-6 bg-white text-black font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
