import { createFileRoute } from '@tanstack/react-router'
import { createSeo } from '../utils/seo'
import { SEO } from '../constants/seo'
import { Eye } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/login')({
    head: ()=> createSeo(SEO.LOGIN),
   component: Login,
})

function Login() {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      console.log({
        email,
        password,
      });
  
      // TODO:
      // Connect Spring Boot login API later
    };
  
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-hero-from to-hero-to px-6">
        <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-xl ring-1 ring-black/5">
          {/* Header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
              <Eye
                className="h-6 w-6 text-brand"
                strokeWidth={2.5}
              />
            </div>
  
            <div>
              <h1 className="text-2xl font-bold text-brand-dark">
                Admin Login
              </h1>
  
              <p className="text-sm text-brand-dark/60">
                Iris Academy CMS
              </p>
            </div>
          </div>
  
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-brand-dark">
                Email Address
              </label>
  
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@irisacademy.com"
                className="w-full rounded-xl border border-brand/20 bg-background px-4 py-3 outline-none transition focus:border-brand"
              />
            </div>
  
            <div>
              <label className="mb-2 block text-sm font-medium text-brand-dark">
                Password
              </label>
  
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-brand/20 bg-background px-4 py-3 outline-none transition focus:border-brand"
              />
            </div>
  
            <button
              type="submit"
              className="w-full rounded-xl bg-brand py-3 font-semibold text-brand-foreground transition hover:bg-brand/90"
            >
              Sign In
            </button>
          </form>
  
          <p className="mt-6 text-center text-xs text-brand-dark/50">
            Administrator access only
          </p>
        </div>
      </div>
    );
}
