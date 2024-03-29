"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ link }) => {
  const pathName = usePathname();

  return (
    <div className="">
      <Link
        className={`rounded px-4 py-2  ${
          pathName === link.url && "bg-black text-white"
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavLinks;
