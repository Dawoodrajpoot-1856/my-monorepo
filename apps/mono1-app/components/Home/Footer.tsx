"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-1">
            <span className="text-xl font-bold text-white">BrandName</span>
            <p className="text-sm text-gray-400">
              Building modern web solutions and seamless digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                <li>Home</li>
              </Link>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-white transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/Users"
                  className="hover:text-white transition-colors"
                >
                  Users{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/Counter"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Counter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} BrandName. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#twitter"
              className="hover:text-gray-400 transition-colors"
            >
              Twitter
            </a>
            <a href="#github" className="hover:text-gray-400 transition-colors">
              GitHub
            </a>
            <a
              href="#linkedin"
              className="hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
