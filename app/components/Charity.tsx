// components/Charity.tsx
import Image from "next/image";

const partners = [
  { src: "/prostate-cancer.png", alt: "Prostate Cancer Foundation", width: 130 },
  { src: "/american-tinnitus.png", alt: "American Tinnitus Association", width: 140 },
  { src: "/us-pain.png", alt: "US Pain Foundation", width: 120 },
  { src: "/american-diabetes.png", alt: "American Diabetes Association", width: 150 },
  { src: "/american-heart.png", alt: "American Heart Association", width: 140 },
];

export default function Charity() {
  return (
    <section className="py-20 text-white" style={{ backgroundImage: "url(/banner-charity-bg.png)", backgroundSize: "cover" }}>
      <div className="mx-auto container-max px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3 text-white" style={{ color: "#ffffff" }}>
            Our Charitable Initiatives
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-white" style={{ color: "#ffffff" }}>
            Health Care Desk Gives Back
          </h3>
          <p className="text-base leading-relaxed mb-10 whitespace-nowrap text-white">
            At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner) => (
            <Image key={partner.alt} src={partner.src} alt={partner.alt} width={partner.width} height={60} />
          ))}
        </div>
      </div>
    </section>
  );
}
