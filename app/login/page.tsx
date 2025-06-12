'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const loginSchema = z.object({
  username: z.string().min(3, { message: 'Please enter your username' }),
  password: z.string().min(3, { message: 'Please enter your password' }),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log('Login data:', data);
    // TODO: Call login API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6FC]">
      <div className="bg-white p-[16px] rounded-xl shadow-md w-full max-w-sm space-y-6 min-h-screen sm:min-h-0 sm:rounded-xl sm:shadow-md sm:p-8 flex flex-col justify-center">
        <div className="flex justify-center mb-4">
          <Image src="/frame.svg" alt="Logo" width={134} height={24} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-[10px]">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Username</label>
            <Input placeholder="Input username" {...register('username')} />
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Input password"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-slate-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <Button type="submit" className="w-full mt-4 bg-blue-600">Login</Button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Don’t have an account?{' '}
          <Link href="/register" className="text-blue-600 underline hover:text-blue-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}