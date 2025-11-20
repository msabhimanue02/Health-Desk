// components/Footer.tsx
import Image from "next/image";

const productColumns = [
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma Care"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"],
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] pt-12">
      <div className="mx-auto container-max px-6">
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="md:w-1/3">
              <Image src="/footer-healthdesk.png" width={150} height={40} alt="Health Desk Logo" className="mb-4" />
              <p className="text-sm text-slate-800 leading-relaxed">
                Address: 7823 Red Oak Trail, Austin, TX, 78745, United States
                <br />
                Phone: (512) 555-2376
                <br />
                Email: Ereforce@outlook.com
              </p>
            </div>
            <div className="hidden md:block w-[1px] bg-black self-stretch" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-[#1f6bd8]">Our Products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm text-slate-700">
                {productColumns.map((col, index) => (
                  <div key={`col-${index}`} className="space-y-1">
                    {col.map((item) => (
                      <p key={`${item}-${index}`}>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-slate-600">
          <p>
            These statements have not been evaluated by the Food and Drug Administration.
            <br />
            These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
          </p>
          <div className="flex flex-col items-center gap-3 mt-4">
            <Image src="/credit-card.png" alt="Payment methods" width={260} height={40} />
          </div>
        </div>

        <div className="border-t border-slate-300 py-6 text-sm text-slate-700 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-[#1f6bd8]">
              Terms And Conditions
            </a>
            <span className="text-slate-400">|</span>
            <a href="#" className="hover:text-[#1f6bd8]">
              Privacy Policy
            </a>
            <span className="text-slate-400">|</span>
            <a href="#" className="hover:text-[#1f6bd8]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
