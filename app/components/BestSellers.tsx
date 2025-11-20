// components/BestSellers.tsx
import Image from "next/image";

const products = [
  { name: "Dent Pure", image: "/product-dentpure.png" },
  { name: "True Fem", image: "/product-truefem.png" },
  { name: "Vita Renew", image: "/product-vitarenew.png" },
  { name: "ProstaZen", image: "/product-prostazen.png" },
  { name: "Nerve Freedom", image: "/product-nervefreedom.png" },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto container-max px-6">
        <header className="mb-10 text-left">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Our Best Sellers</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            Formulated with science-backed all-natural ingredients, our unique supplements support holistic health,
            healing & wellness.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-8 text-lg font-semibold text-slate-900 mb-10">
          {"Results-Driven,All-Natural,Non-GMO,Cruelty-Free".split(",").map((label, index) => (
            <span key={label} className={index === 0 ? "" : "pl-6 border-l border-slate-300"}>
              {label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {products.map((product) => (
            <article key={product.name} className="rounded-[24px] bg-[#f7f9fc] px-6 pt-8 pb-6 text-center shadow-[0_20px_40px_rgba(15,23,42,0.06)] flex flex-col">
              <div className="mb-4 flex h-40 items-center justify-center">
                <Image src={product.image} alt={product.name} width={220} height={200} className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <div className="mt-auto">
                <button className="inline-flex items-center justify-center rounded-md border border-[#1f6bd8] px-5 py-2 text-sm font-semibold text-[#1f6bd8] transition hover:bg-[#1f6bd8] hover:text-white">
                  Shop Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
