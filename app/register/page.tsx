'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";

const registerSchema = z.object({
  username: z.string().min(1, { message: 'Username field cannot be empty' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(["user", "admin"], { required_error: "Role is required" }),
});
type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"user" | "admin" | "">("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSelectRole = (value: "user" | "admin") => {
    setRole(value);
    setValue("role", value, { shouldValidate: true });
  };

  const onSubmit = (data: RegisterData) => {
    console.log('Register data:', data);
    // TODO: panggil API register
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6FC]">
      <div className="bg-white p-[16px] rounded-xl shadow-md w-full max-w-sm space-y-6 min-h-screen sm:min-h-0 sm:rounded-xl sm:shadow-md sm:p-8 flex flex-col justify-center">
        <div className="flex justify-center mb-4">
          <Image src="/frame.svg" alt="Logo" width={134} height={24} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-[10px]">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <Input placeholder="Input username" {...register('username')} />
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Input password"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={clsx(
                    "w-full rounded-md border px-3 py-2 text-sm flex items-center justify-between bg-white",
                    !role ? "text-gray-900" : "text-gray-900",
                    errors.role ? "border-red-500" : "border-gray-300",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  {role ? (role === "user" ? "User" : "Admin") : "Select Role"}
                  <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-0">
                <DropdownMenuItem
                  onSelect={() => onSelectRole("user")}
                  className="px-3 py-2 text-sm cursor-pointer focus:bg-blue-50"
                >
                  User
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => onSelectRole("admin")}
                  className="px-3 py-2 text-sm cursor-pointer focus:bg-blue-50"
                >
                  Admin
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input type="hidden" {...register("role")} value={role} />
            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-4 bg-blue-600">Register</Button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 underline hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}