"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ForgotPasswordForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Link sent!",
      description: "Please check your email for the reset link.",
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-[#5D5A88] mb-8">Envision</h2>
        <h1 className="text-[32px] font-bold text-[#5D5A88] mb-2">
          Forgot Your Password?
        </h1>
        <p className="text-base text-[#8C89B4]">
          No worries! Enter your email below, and we'll<br />send you a link to reset your password.
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
        <Button 
          type="submit" 
          className="w-full h-12 bg-[#5D5A88] hover:bg-[#5D5A88]/90 text-white rounded-[100px] mt-2"
        >
          Send Link
        </Button>
      </form>
      <div className="text-center text-sm">
        <span className="text-[#8C89B4]">
          Don't got the link?{" "}
        </span>
        <button
          onClick={handleSubmit}
          className="font-medium text-[#5D5A88] hover:underline"
        >
          Resend link
        </button>
      </div>
    </div>
  );
}