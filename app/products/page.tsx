"use client";

import { useState } from "react";
import Link from "next/link";
import { MoreVertical, Plus, Search } from "lucide-react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  {
    id: 1,
    name: "Sleek Bathroom Mirror with LED Lighting",
    sku: "MIR-LED-512",
    category: "Mirror",
    rating: 4.5,
    stock: "512 Left - 482 Sold",
    price: 49.99,
  },
  {
    id: 2,
    name: "Classic Bathtub Faucet Set",
    sku: "BAT-FCT-903",
    category: "Bathtub",
    rating: 4.5,
    stock: "903 Left - 491 Sold",
    price: 99.99,
  },
  {
    id: 3,
    name: "Stylish Wooden Interior Doors",
    sku: "DR-WOD-089",
    category: "Doors",
    rating: 4.5,
    stock: "512 Left - 564 Sold",
    price: 39.99,
  },
  {
    id: 4,
    name: "Contemporary Shower System",
    sku: "SHW-SYS-450",
    category: "Shower",
    rating: 4.5,
    stock: "89 Left - 482 Sold",
    price: 79.99,
  },
];

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  return (
    <DashboardLayout>
      <div className="bg-white px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-semibold text-[#262D34]">Products</h2>
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C89B4]" />
              <Input
                placeholder="Search here..."
                className="h-10 pl-9 rounded-full border-[#E4E4E7] placeholder:text-[#8C89B4]"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="h-10 w-32 md:w-40 rounded-full border-[#E4E4E7] text-[#8C89B4]">
                <SelectValue placeholder="All Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Category</SelectItem>
                <SelectItem value="mirror">Mirror</SelectItem>
                <SelectItem value="bathtub">Bathtub</SelectItem>
                <SelectItem value="doors">Doors</SelectItem>
                <SelectItem value="shower">Shower</SelectItem>
              </SelectContent>
            </Select>
            <Link href="/add-product">
              <Button
                className="h-10 px-4 bg-[#5D5A88] hover:bg-[#5D5A88]/90 rounded-full whitespace-nowrap"
              >
                <Plus className="mr-2 h-4 w-4" /> New Product
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link href="/product-details" key={product.id}>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square mb-4 bg-[#F8F9FC] rounded-lg">
                  
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                  <h3 className="font-bold text-[#5D5A88] line-clamp-2">
                    {product.name}
                  </h3>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10">
                          <MoreVertical className="h-5 w-5 text-[#8C89B4]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                    </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-[#8C89B4] text-[14px]">SKU</p>
                      <p className="font-bold text-[#5D5A88] text-[14px]">{product.sku}</p>
                    </div>
                    <div>
                      <p className="text-[#8C89B4] text-[14px]">Category</p>
                      <p className="font-bold text-[#5D5A88] text-[14px]">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-[#8C89B4] text-[14px]">Rating</p>
                      <p className="font-bold text-[#5D5A88] text-[14px]">{product.rating}</p>
                    </div>
                    <div>
                      <p className="text-[#8C89B4] text-[14px]">Stock</p>
                      <p className="font-bold text-[#5D5A88] text-[14px]">{product.stock}</p>
                    </div>
                    <div>
                      <p className="text-[#8C89B4] text-[14px]">Price</p>
                      <p className="text-[14px] font-bold text-[#5D5A88]">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </DashboardLayout>
  );
}