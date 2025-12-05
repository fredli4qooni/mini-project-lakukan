"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useAuthStore } from "@/store/useAuthStore";

export default function SignUpPage() {
  const router = useRouter();
  const { register, isLoading, error } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Account created successfully! (Simulation)\nPlease login with demo credentials.");
      router.push("/login");
      
    } catch (err) {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-wide">Create an account</h1>
        <p className="text-sm text-gray-500">Enter your details below</p>
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-8">
        <Input 
          name="name"
          type="text" 
          placeholder="Name (Username)" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input 
          name="email"
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input 
          name="password"
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <div className="flex flex-col gap-4 mt-2">
          <Button 
            type="submit"
            variant="danger" 
            size="lg" 
            className="w-full h-12 rounded disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
          
          <button 
            type="button"
            className="w-full h-12 rounded border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <img 
               src="https://www.svgrepo.com/show/475656/google-color.svg" 
               alt="Google" 
               className="w-6 h-6"
            />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <span>Already have account?</span>
        <Link href="/login" className="text-black font-medium border-b border-black pb-0.5 hover:text-gray-600 transition-colors">
          Log in
        </Link>
      </div>
    </div>
  );
}