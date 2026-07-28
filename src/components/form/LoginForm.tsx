/* eslint-disable react-hooks/incompatible-library */
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { EyeOff, Eye, Check } from "lucide-react";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      rememberMe: true,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        {/* Email Section */}
        <div className="mb-5.5">
          <label className="block text-[16px] font-medium text-[#444444] mb-2.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter a valid email address"
            defaultValue="nion@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full h-14 bg-[#F5F5F5] rounded-xl px-4.5 text-[16px] text-[#444444] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#8B7CFF] focus:ring-offset-0 transition-all"
          />
          {errors.email && (
            <span className="block text-[13px] text-red-500 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password Section */}
        <div className="mb-3.5">
          <label className="block text-[16px] font-medium text-[#444444] mb-2.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              defaultValue="password123"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full h-14 bg-[#F5F5F5] rounded-xl px-4.5 pr-12.5 text-[16px] text-[#444444] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#8B7CFF] focus:ring-offset-0 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4.5 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#7A7A7A] transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye size={20} strokeWidth={2} />
              ) : (
                <EyeOff size={20} strokeWidth={2} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="block text-[13px] text-red-500 mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mb-7">
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-sm flex items-center justify-center transition-colors ${
                  rememberMe
                    ? "bg-[#8B7CFF]"
                    : "bg-[#F5F5F5] border border-[#D0D0D0]"
                }`}
              >
                {rememberMe && (
                  <Check size={14} className="text-white" strokeWidth={3} />
                )}
              </div>
            </label>
            <label className="text-[15px] text-[#777777] cursor-pointer select-none">
              Remember Me
            </label>
          </div>
          <a
            href="#"
            className="text-[15px] font-medium text-[#8B7CFF] hover:text-[#7A6DD9] transition-colors no-underline"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-14 bg-[#2D2D2D] hover:bg-[#3A3A3A] rounded-xl text-white text-[18px] font-semibold transition-colors duration-200"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="mt-6.5 text-center">
          <span className="text-[15px] text-[#777777]">
            Don't have an account?{" "}
          </span>
          <a
            href="#"
            className="text-[15px] font-medium text-[#8B7CFF] hover:text-[#7A6DD9] transition-colors no-underline"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;