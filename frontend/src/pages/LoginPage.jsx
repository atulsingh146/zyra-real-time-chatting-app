import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center "
    >
      <div
        className="flex flex-col justify-center items-center p-6 sm:p-12 rounded-xl w-full max-w-md shadow-xl backdrop-blur-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="w-full space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-[#2EBDC7]/10 flex items-center justify-center group-hover:bg-[#2EBDC7]/20 transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-[#2EBDC7]" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-white">Welcome Back to Zyra!</h1>
              <p className="text-gray-300">Your World,Free and Secure.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 text-white bg-transparent border-gray-500 placeholder-white/60"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 text-white bg-transparent border-gray-500 placeholder-white/60"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-white/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/40" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold transition-colors"
              style={{
                backgroundColor: "#2EBDC7",
                opacity: isLoggingIn ? 0.6 : 1,
                cursor: isLoggingIn ? "not-allowed" : "pointer",
              }}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Bottom Link */}
          <div className="text-center">
            <p className="text-white/70">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-[#2EBDC7] font-medium">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
