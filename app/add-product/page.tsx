"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  sku: z.string().min(1, "SKU is required"),
  brand: z.string().min(1, "Brand name is required"),
  specification: z.string().min(1, "Specification is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  discountedPrice: z.string().min(1, "Discounted price is required"),
  minOrder: z.string().min(1, "Minimum order quantity is required"),
  maxOrder: z.string().min(1, "Maximum order quantity is required"),
  stockQty: z.string().min(1, "Stock quantity is required"),
  alertThreshold: z.string().min(1, "Alert threshold is required"),
  material: z.string().min(1, "Material is required"),
  warranty: z.string().min(1, "Warranty details are required"),
  weight: z.string().min(1, "Weight is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  shipping: z.string().min(1, "Shipping option is required"),
  handling: z.string().min(1, "Handling time is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z.string().min(1, "Meta description is required"),
  tags: z.string().min(1, "Tags are required"),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function AddProductPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [images, setImages] = useState<File[]>([]);
  const [colorVariants, setColorVariants] = useState([
    { hex: "", color: "#E4E4E7" },
    { hex: "", color: "#E4E4E7" },
    { hex: "", color: "#E4E4E7" },
    { hex: "", color: "#E4E4E7" },
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  const onDrop = (acceptedFiles: File[]) => {
    setImages(prev => [...prev, ...acceptedFiles].slice(0, 5));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 5,
  });

  const handleColorChange = (index: number, hex: string) => {
    const newColorVariants = [...colorVariants];
    newColorVariants[index] = {
      hex,
      color: hex || "#E4E4E7",
    };
    setColorVariants(newColorVariants);
  };

  const onSubmit = (data: ProductFormValues) => {
    console.log(data);
    toast({
      title: "Success!",
      description: "Product has been created.",
    });
  };

  return (
    <DashboardLayout>
      <div className="bg-white px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#262D34]">New Product</h2>
          <Button
            variant="ghost"
            onClick={() => router.push("/products")}
            className="text-[#8C89B4] hover:text-[#5D5A88]"
          >
            Clear
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Media & Attachments (40%) */}
          <div className="lg:w-[40%] space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">Media & Attachments</h3>
              <div
                {...getRootProps()}
                className="border-2 border-dashed rounded-lg p-6 text-center bg-[#F8F9FC] cursor-pointer"
              >
                <input {...getInputProps()} />
                <div className="mx-auto w-16 h-16 mb-4">
                  <img
                    src="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='32' fill='%23E4E4E7'/%3E%3Cpath d='M32 24L40 40H24L32 24Z' fill='%238C89B4'/%3E%3C/svg%3E"
                    alt="Upload"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-[#8C89B4]">
                  {isDragActive ? "Drop files here" : "Drop your images here, or click to browse"}
                </p>
                <p className="text-xs text-[#8C89B4] mt-1">
                  1600 × 1200 (4:3) recommended.
                  <br />
                  PNG, JPG and GIF files are allowed
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {images.map((file, index) => (
                  <div key={index} className="aspect-square bg-[#F8F9FC] rounded-lg relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
                {Array.from({ length: Math.max(0, 5 - images.length) }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square bg-[#F8F9FC] rounded-lg" />
                ))}
              </div>
              <div className="space-y-1.5 mt-4">
                <Label htmlFor="video-link" className="text-[#5D5A88]">Product Video Link</Label>
                <Input
                  id="video-link"
                  placeholder="Paste link here"
                  className="h-10 rounded-lg border-[#E4E4E7]"
                />
              </div>
            </div>
          </div>

          {/* Right Side - All Other Sections (60%) */}
          <div className="lg:w-[60%] space-y-6">
            {/* Product Information */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">Product Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-[#5D5A88]">Product Name</Label>
                    <Input
                      {...register("name")}
                      placeholder="Enter product name"
                      className="h-10 rounded-lg border-[#E4E4E7]"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="category" className="text-[#5D5A88]">Category</Label>
                    <Select>
                      <SelectTrigger className="h-10 rounded-lg border-[#E4E4E7]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mirror">Mirror</SelectItem>
                        <SelectItem value="bathtub">Bathtub</SelectItem>
                        <SelectItem value="doors">Doors</SelectItem>
                        <SelectItem value="shower">Shower</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="sku" className="text-[#5D5A88]">SKU</Label>
                    <Input
                      {...register("sku")}
                      placeholder="Enter SKU"
                      className="h-10 rounded-lg border-[#E4E4E7]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="brand" className="text-[#5D5A88]">Brand Name</Label>
                    <Input
                      {...register("brand")}
                      placeholder="Enter brand name"
                      className="h-10 rounded-lg border-[#E4E4E7]"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="specification" className="text-[#5D5A88]">Specification</Label>
                  <Textarea
                    {...register("specification")}
                    placeholder="Enter specification about the product"
                    className="min-h-[100px] rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="description" className="text-[#5D5A88]">Description</Label>
                  <Textarea
                    {...register("description")}
                    placeholder="Enter description about the product"
                    className="min-h-[100px] rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Stock Information */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">Pricing & Stock Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="price" className="text-[#5D5A88]">Price</Label>
                  <Input
                    {...register("price")}
                    placeholder="Enter actual price"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="discountedPrice" className="text-[#5D5A88]">Discounted Price</Label>
                  <Input
                    {...register("discountedPrice")}
                    placeholder="Enter selling price"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="minOrder" className="text-[#5D5A88]">Minimum Order Qty</Label>
                  <Input
                    {...register("minOrder")}
                    placeholder="Enter quantity"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="maxOrder" className="text-[#5D5A88]">Maximum Order Qty</Label>
                  <Input
                    {...register("maxOrder")}
                    placeholder="Enter quantity"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <Label htmlFor="stockQty" className="text-[#5D5A88]">Stock Quantity</Label>
                  <Input
                    {...register("stockQty")}
                    placeholder="Enter quantity"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="alertThreshold" className="text-[#5D5A88]">Stock Alert Threshold</Label>
                  <Input
                    {...register("alertThreshold")}
                    placeholder="Enter threshold quantity"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">Additional Details</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-[#5D5A88]">Color Variants</Label>
                    <Button
                      type="button"
                      variant="ghost"
                      className="text-[#5D5A88] hover:text-[#5D5A88]/90"
                    >
                      + Add Color
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {colorVariants.map((variant, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="flex-1">
                          <Input
                            value={variant.hex}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            placeholder="Hex code"
                            className="h-10 rounded-lg border-[#E4E4E7]"
                          />
                        </div>
                        <div 
                          className="w-10 h-10 rounded cursor-pointer"
                          style={{ backgroundColor: variant.color }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-[#5D5A88]">Size Variants</Label>
                    <Button
                      type="button"
                      variant="ghost"
                      className="text-[#5D5A88] hover:text-[#5D5A88]/90"
                    >
                      + Add Variant
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <Input
                        key={i}
                        placeholder="Enter size"
                        className="h-10 rounded-lg border-[#E4E4E7]"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="material" className="text-[#5D5A88]">Material</Label>
                  <Input
                    {...register("material")}
                    placeholder="Enter material"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="warranty" className="text-[#5D5A88]">Warranty Details</Label>
                  <Input
                    {...register("warranty")}
                    placeholder="Enter warranty"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
            </div>

            {/* Shipping & Dimensions */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">Shipping & Dimensions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="weight" className="text-[#5D5A88]">Weight (kg/lb)</Label>
                  <Input
                    {...register("weight")}
                    placeholder="Enter weight"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="dimensions" className="text-[#5D5A88]">Dimensions (L × W × H)</Label>
                  <Input
                    {...register("dimensions")}
                    placeholder="Enter dimensions"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="shipping" className="text-[#5D5A88]">Shipping Options</Label>
                  <Select>
                    <SelectTrigger className="h-10 rounded-lg border-[#E4E4E7]">
                      <SelectValue placeholder="Select shipping options" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Shipping</SelectItem>
                      <SelectItem value="express">Express Shipping</SelectItem>
                      <SelectItem value="free">Free Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="handling" className="text-[#5D5A88]">Handling Time</Label>
                  <Input
                    {...register("handling")}
                    placeholder="Enter handling time"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
            </div>

            {/* SEO & Visibility */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#262D34] mb-4">SEO & Visibility</h3>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="metaTitle" className="text-[#5D5A88]">Meta Title</Label>
                  <Input
                    {...register("metaTitle")}
                    placeholder="Enter meta title"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="metaDescription" className="text-[#5D5A88]">Meta Description</Label>
                  <Textarea
                    {...register("metaDescription")}
                    placeholder="Meta description about the product"
                    className="min-h-[100px] rounded-lg border-[#E4E4E7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tags" className="text-[#5D5A88]">Product Tags</Label>
                  <Input
                    {...register("tags")}
                    placeholder="Enter Tags"
                    className="h-10 rounded-lg border-[#E4E4E7]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-12 px-6 rounded-full"
                onClick={() => router.push("/products")}
              >
                Save as Draft
              </Button>
              <Button
                type="submit"
                className="h-12 px-6 bg-[#5D5A88] hover:bg-[#5D5A88]/90 text-white rounded-full"
              >
                Create Product
              </Button>
            </div>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}