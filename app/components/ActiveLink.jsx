"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children, onClick }) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 font-light py-2 transition text-[14px] ${
        isActive ? "text-secondary" : "text-white hover:text-secondary"
      }`}
    >
      {children}
    </Link>
  );
}
