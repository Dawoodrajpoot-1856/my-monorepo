import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-emerald-400"
            >
              Nexus<span className="text-white">Dev</span>
            </Link>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex space-x-8 list-none m-0 p-0 items-center">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/Counter"
                  className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  Counter{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
