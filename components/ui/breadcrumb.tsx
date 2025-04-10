"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-[#8C89B4] hover:text-[#5D5A88]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#5D5A88]">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 text-[#8C89B4]" />
          )}
        </div>
      ))}
    </div>
  );
}