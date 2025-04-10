"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-[#5D5A88] border-[#5D5A88] hover:bg-[#5D5A88] hover:text-white rounded-full px-6"
      >
        Previous
      </Button>
      <p className="text-sm text-[#8C89B4]">{currentPage} of {totalPages}</p>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#5D5A88] hover:bg-[#5D5A88]/90 text-white rounded-full px-6"
      >
        Next
      </Button>
    </div>
  );
}