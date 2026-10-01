import { useState } from "react";
import Logo from "./aruionj.png";

export default function Home({ onAuthenticated }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuthenticated?.();
  };

  const toggleForm = () => {
    setIsSignUp((currentMode) => !currentMode);
  };

  const formTitle = isSignUp ? "Create your account" : "Welcome back";
  const formDescription = isSignUp
    ? "Enter your details to join Aruion Marketplace."
    : "Enter your details to access your marketplace account.";

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 flex items-center justify-center gap-3">
          <img
            src={Logo}
            alt="Aruion Marketplace"
            className="h-10 w-10 rounded-full bg-slate-900 p-2"
          />
          <span className="text-lg font-bold text-orange-500">
            A Better Way To Connect
          </span>
        </header>

        <section className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
          <div
            className="relative flex min-h-64 flex-col justify-end bg-cover bg-center p-8 text-white"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=900&auto=format&fit=crop&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/65" />
            <div className="relative">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-200">
                Aruion Marketplace
              </p>
              <h1 className="text-3xl font-bold">
                {isSignUp ? "Join the marketplace" : "Welcome back"}
              </h1>
              <p className="mt-3 max-w-sm text-slate-100">
                Discover the best products and services in one place.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">{formTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{formDescription}</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {isSignUp && (
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-700"
                    htmlFor="full-name"
                  >
                    Full name
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    id="full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Aruion User"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      className="text-sm font-medium text-orange-600 hover:text-orange-700"
                      type="button"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {isSignUp && (
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-700"
                    htmlFor="confirm-password"
                  >
                    Confirm password
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>
              )}

              {!isSignUp && (
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-purple-500"
                    name="remember"
                    type="checkbox"
                  />
                  Remember me
                </label>
              )}

              <button
                className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                type="submit"
              >
                {isSignUp ? "Create account" : "Sign in"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              {isSignUp ? "Already have an account?" : "New to Aruion?"}{" "}
              <button
                className="font-semibold text-orange-600 hover:text-orange-700 focus:outline-none focus:underline"
                type="button"
                onClick={toggleForm}
              >
                {isSignUp ? "Sign in instead" : "Create an account"}
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
