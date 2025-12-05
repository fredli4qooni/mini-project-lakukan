"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuthStore();
  
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push("/");
    } catch (err) {
      console.error("Login Error UI Triggered");
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-wide">Log in to Exclusive</h1>
        <p className="text-sm text-gray-500">Enter your details below</p>
      </div>

      <div className="bg-gray-100 p-4 rounded text-xs text-gray-600 border border-gray-200">
        <p className="font-bold mb-1">Demo Credentials (FakeStoreAPI):</p>
        <p>Username: <span className="font-mono text-black">mor_2314</span></p>
        <p>Password: <span className="font-mono text-black">83r5^_</span></p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-8">
        <Input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <div className="flex items-center justify-between mt-2">
          <Button 
            type="submit"
            variant="danger" 
            size="lg" 
            className="px-8 h-12 rounded shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
          
          <Link href="/forgot-password" className="text-danger text-sm font-medium hover:underline">
            Forget Password?
          </Link>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-4">
        <span>Don&apos;t have an account?</span>
        <Link href="/signup" className="text-black font-medium border-b border-black pb-0.5 hover:text-gray-600 transition-colors">
          Sign Up
        </Link>
      </div>
    </div>
  );
}