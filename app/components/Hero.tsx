// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-14 lg:py-18">
      <div className="mx-auto container-max px-6">
        <div className="rounded-[32px] bg-[#f4f5f7] px-8 py-10 lg:px-16 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <div className="max-w-[600px]">
            <h1 className="text-[48px] leading-[55px] font-extrabold text-[#101828] mb-6">
              Health Desk Clinic:
              <br />
              All Natural Supplements
            </h1>

            <p className="text-[19px] leading-[32px] text-[#171717] font-normal mb-10">
              Health Care Desk is the premier choice for those seeking wellness through wholesome,
              superfood-enriched formulas that actually work. Our all-natural, organic health supplements are
              designed to give your body what it needs to thrive and optimize your health each day!
            </p>

            <button className="px-10 py-4 bg-[#1e73e8] text-white text-[18px] font-semibold rounded-full shadow-md hover:bg-[#105ccc] transition">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center lg:justify-end w-full items-stretch">
            <Image
              src="/hero-doctor.png"
              alt="Doctor"
              width={860}
              height={1500}
              priority
              className="object-contain w-full max-w-[780px] lg:-mt-16 drop-shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
