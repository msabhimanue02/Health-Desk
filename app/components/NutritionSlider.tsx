// components/NutritionSlider.tsx
import Image from "next/image";

const cards = [
  {
    title: "Women's Health",
    desc: "Explore women's health products that support hormonal balance, vitality, and overall wellness.",
    icon: "/cat-womens-health.png",
  },
  {
    title: "Dental",
    desc: "Shop dental care products that keep your smile bright, healthy, and confident.",
    icon: "/dental.jpeg",
  },
  {
    title: "Memory",
    desc: "Discover memory support products that help enhance focus, clarity, and cognitive performance.",
    icon: "/memory.jpeg",
  },
  {
    title: "Weight Loss",
    desc: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
    icon: "/cat-weight-loss.png",
  },
  {
    title: "Nerve Pain",
    desc: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.",
    icon: "/cat-nerve.png",
  },
  {
    title: "Skin Care",
    desc: "Explore premium skincare products that nourish, protect, and enhance your natural glow.",
    icon: "/cat-skincare.png",
  },
  {
    title: "Men's Health",
    desc: "Discover men's health products designed to boost energy, strength, and overall well-being.",
    icon: "/cat-mens.png",
  },
];

export default function NutritionSlider() {
  const loop = [...cards, ...cards];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto container-max px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
          Nutrition Solutions
          <br />
          for Your Complete Well-Being
        </h2>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" aria-hidden />

          <div className="nutrition-track flex gap-6">
            {loop.map((card, idx) => (
              <article key={`${card.title}-${idx}`} className="min-w-[240px] max-w-[240px] rounded-[28px] bg-[#e7f3f9] p-6 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
                <div className="flex h-full flex-col gap-4">
                  <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image src={card.icon} alt={`${card.title} icon`} width={32} height={32} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{card.desc}</p>
                  </div>
                  <button className="mt-auto h-11 rounded-full bg-gradient-to-r from-[#3c8bff] to-[#5861ff] text-white text-sm font-semibold shadow">
                    Buy now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
