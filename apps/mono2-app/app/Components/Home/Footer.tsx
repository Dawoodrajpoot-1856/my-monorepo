"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <span className="text-xl font-bold text-emerald-400">NexusDev</span>
            <p className="text-sm text-slate-400">
              Empowering developers with next-gen scalable systems and modern
              architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>

          {/* Support / Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 border border-slate-700 text-slate-100 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} NexusDev. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
