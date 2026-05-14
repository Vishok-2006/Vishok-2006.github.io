import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-300 border-t border-[#2A0E61]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between gap-10">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[180px] flex flex-col"
            >
              <h3 className="text-white font-semibold text-lg mb-4">
                {column.title}
              </h3>

              <div className="flex flex-col gap-4">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {Icon && <Icon size={18} />}
                    <span className="text-sm">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#2A0E61] mt-10 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vishok. All rights reserved.
        </div>
      </div>
    </footer>
  );
};