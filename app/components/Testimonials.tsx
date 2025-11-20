// components/Testimonials.tsx
import Image from "next/image";

const testimonials = [
  {
    title: "TestoBites",
    image: "/testobites.png",
    text:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my drive and virility as well. Highly recommended.",
    author: "Ryan R.",
  },
  {
    title: "Vita Renew",
    image: "/product-vitarenew.png",
    text:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my skin care.",
    author: "Jamie Fields",
  },
  {
    title: "Nerve Freedom",
    image: "/product-nervefreedom.png",
    text:
      "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto container-max px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 mb-14">Verified Customer Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="relative rounded-[28px] bg-[#eef6ff] px-6 pt-14 pb-8 shadow-[0_25px_40px_rgba(15,23,42,0.12)] border border-[#cfe2f6]"
            >
              <div className="absolute -top-10 left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Image src={item.image} alt={item.title} width={70} height={70} className="object-contain" />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <div className="flex gap-1 text-[#f6b100] text-lg">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">{item.text}</p>
              <p className="text-sm font-semibold text-slate-900">- {item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
