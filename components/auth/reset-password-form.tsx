"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ResetPasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password reset successful!",
      description: "Your password has been updated.",
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-[#5D5A88] mb-8">Envision</h2>
        <h1 className="text-[32px] font-bold text-[#5D5A88] mb-2">
          Reset Your Password
        </h1>
        <p className="text-base text-[#8C89B4]">
          Set a new password below.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="new-password" className="text-[#5D5A88]">New Password</Label>
          <div className="relative">
            <Input
              id="new-password"
              placeholder="Enter your password"
              type={showNewPassword ? "text" : "password"}
              className="h-12 rounded-lg border-[#E4E4E7] placeholder:text-[#8C89B4]"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C89B4]"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
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
          Reset Password
        </Button>
      </form>
    </div>
  );
}