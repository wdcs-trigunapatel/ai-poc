"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShoppingCart, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(2);

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "SmileSellers Led Mirror Round Design" },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white px-4 md:px-6 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="p-4 md:p-6">
        <div className="bg-white rounded-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Product Images (40%) */}
            <div className="lg:w-[40%] p-6">
              <div className="aspect-square bg-[#F8F9FC] rounded-lg">
                {/* Main product image */}
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#F8F9FC] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Product Details (60%) */}
            <div className="lg:w-[60%] p-6 border-l">
              <div className="space-y-6">
                <div>
                  <div className="flex gap-4 mb-2 border-b border-[#E7E6F2] pb-3">
                    <h1 className="text-xl font-medium text-[#262D34]">
                      SmileSellers Led Mirror Round Design Modern Glass Bathroom
                      Mirror with 3 Color Light-Wall Mounted Backlit with Front
                      Light (White Light, 24x24)
                    </h1>
                    <div>
                      <div className="flex items-center">
                        <span className="text-[#5D5A88] font-semibold">
                          4.5
                        </span>
                        <div className="flex items-center ml-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${
                                star <= 4 ? "text-[#5D5A88]" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-[#8C89B4] block">(91 Reviews)</div>
                    </div>
                  </div>
                  <div className="border-b border-[#E7E6F2] pb-3">
                    <div className="mt-4 flex items-center gap-2">
                      <div className="text-2xl font-bold text-[#5D5A88]">
                        $129.99
                      </div>
                      <div className="text-sm line-through text-[#262D34]">
                        $149.99
                      </div>
                      <div className="text-sm text-[#262D34]">
                        40% off (Included all Taxes)
                      </div>
                    </div>
                    <div className="font-medium text-[#262D34]">
                      SKU: LEDMIR-001
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#8C89B4] text-sm font-bold">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <button
                        className="w-8 h-8 border rounded-l-lg flex items-center justify-center text-[#8C89B4]"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(parseInt(e.target.value) || 1)
                        }
                        className="w-12 h-8 border-y text-center"
                      />
                      <button
                        className="w-8 h-8 border rounded-r-lg flex items-center justify-center text-[#8C89B4]"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#8C89B4] text-sm font-bold">
                      Size
                    </label>
                    <Select defaultValue="60x60">
                      <SelectTrigger className="h-8 rounded-lg border-[#E4E4E7]">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60x60">
                          60L × 60W Centimeters
                        </SelectItem>
                        <SelectItem value="80x80">
                          80L × 80W Centimeters
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#8C89B4] text-sm font-bold">
                      Color
                    </label>
                    <Select defaultValue="black">
                      <SelectTrigger className="h-8 rounded-lg border-[#E4E4E7]">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5 border-b border-[#E7E6F2] pb-5">
                  <label className="text-[#8C89B4] text-sm font-bold">
                    Check Delivery Date
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter your number"
                      type="text"
                      className="h-10 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
                      required
                    />
                    <Button
                      variant="outline"
                      className="h-10 px-6 rounded-full border-[#5D5A88] text-[#5D5A88] hover:bg-[#5D5A88] hover:text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to line item
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 border-b border-[#E7E6F2] pb-4">
                  <h3 className="text-lg font-bold text-[#262D34]">
                    Specification
                  </h3>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">Brand</div>
                    <div className="text-[#262D34]">SmileSellers</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">Room Type</div>
                    <div className="text-[#262D34]">Bathroom</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">Shape</div>
                    <div className="text-[#262D34]">Round</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">
                      Product Dimensions
                    </div>
                    <div className="text-[#262D34]">60L × 60W Centimeters</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">
                      Frame Material
                    </div>
                    <div className="text-[#262D34]">Glass</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">Style</div>
                    <div className="text-[#262D34]">White Light</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">
                      Mounting Type
                    </div>
                    <div className="text-[#262D34]">Wall Mount</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="text-[#262D34] font-bold">
                      Special Feature
                    </div>
                    <div className="text-[#262D34]">Touch Sensor</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#262D34]">
                    Description
                  </h3>
                  <ul className="space-y-2 text-[#262D34]">
                    <li>
                      1 Meter wire for installation with plug operates on any
                      plug point mirror can be installed easily mounting hook
                      preinstalled on the mirror
                    </li>
                    <li>
                      Care instructions dry and wet both soft cloth clean by
                      hand. This is a Led mirror with one touch on and off and
                      also change lights.
                    </li>
                    <li>
                      The back side is with an ACP board that is waterproof and
                      termite-proof. Easy to hang and handle.
                    </li>
                    <li>
                      Beautiful led wall mirror for dressing, bedroom, and
                      living room practical, modern, and stylish combination of
                      a led wall mirror.
                    </li>
                    <li>
                      Ideal mirror for your bathroom vanity, or any other room
                      of your home. functional and suitable for a variety of
                      needs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Total and Action Buttons */}
          <div className="border-t p-4 flex items-center justify-between">
            <div className="text-lg">
              <span className="text-[#8C89B4]">Total</span>{" "}
              <span className="font-semibold text-[#5D5A88]">$258.99</span>
              <span className="text-sm text-[#8C89B4] ml-2">
                40% off (Included all Taxes)
              </span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="h-12 px-8 rounded-full border-[#5D5A88] text-[#5D5A88] hover:bg-[#5D5A88] hover:text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button className="h-12 px-8 rounded-full bg-[#5D5A88] hover:bg-[#5D5A88]/90 text-white">
                <ArrowRight className="h-5 w-5 mr-2" />
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
