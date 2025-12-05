import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-wide">Create an account</h1>
        <p className="text-sm text-gray-500">Enter your details below</p>
      </div>

      <form className="flex flex-col gap-8">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />

        <div className="flex flex-col gap-4 mt-2">
          <Button variant="danger" size="lg" className="w-full h-12 rounded">
            Create Account
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