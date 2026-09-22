import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              BrandName
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 list-none m-0 p-0 items-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/Users"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Users
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/Counter"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Counter
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
