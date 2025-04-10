"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "You can now sign in with your credentials.",
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-[#5D5A88] mb-8">Envision</h2>
        <h1 className="text-[32px] font-bold text-[#5D5A88] mb-2">
          Join us to start your<br />online Business
        </h1>
        <p className="text-base text-[#8C89B4]">
          Sign up now to get started!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[#5D5A88]">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            className="h-12 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="number" className="text-[#5D5A88]">Number</Label>
          <Input
            id="number"
            placeholder="Enter your number"
            type="tel"
            className="h-12 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-[#5D5A88]">Create Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              className="h-12 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C89B4]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirm-password" className="text-[#5D5A88]">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirm-password"
              placeholder="Re-type your password"
              type={showConfirmPassword ? "text" : "password"}
              className="h-12 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C89B4]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full h-12 bg-[#5D5A88] hover:bg-[#5D5A88]/90 text-white rounded-[100px] mt-2"
        >
          Create Account
        </Button>
      </form>
      <div className="text-center text-sm">
        <span className="text-[#8C89B4]">
          All ready have an account?{" "}
        </span>
        <Link
          href="/login"
          className="font-medium text-[#5D5A88] hover:underline"
        >
          Sign in here
        </Link>
      </div>
    </div>
  );
}