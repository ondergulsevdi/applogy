import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0612] via-[#16213e] to-[#1a0b2e] border-t border-orange-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 stars opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Link href="/" className="inline-block group">
                <span className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform leading-tight pb-1">
                  Applogy
                </span>
              </Link>
              <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-md">
                Smart AI. Simple Design.
              </p>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed max-w-md">
                Where Creativity Meets Artificial Intelligence. Building innovative, user-friendly AI applications for the App Store.
              </p>
            </div>
            
            {/* App Store Badge */}
            <div className="space-y-4">
              <a
                href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl text-white font-bold text-base flex items-center space-x-3 transform group-hover:scale-105 transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <span>Download on App Store</span>
                  </div>
                </div>
              </a>
              <p className="text-gray-400 text-sm">
                Explore our innovative AI-powered applications
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Navigation */}
            <div>
              <h3 className="font-bold text-white mb-6 text-base uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/apps", label: "Our Apps" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 text-base transition-colors flex items-center group"
                    >
                      <svg 
                        className="w-4 h-4 mr-2 text-orange-500/50 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-white mb-6 text-base uppercase tracking-wider">Features</h3>
              <ul className="space-y-4">
                {[
                  "AI Technology",
                  "Simple Design",
                  "User-Friendly",
                  "Innovative Apps",
                ].map((item) => (
                  <li key={item} className="text-gray-400 text-base flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-white mb-6 text-base uppercase tracking-wider">Resources</h3>
              <ul className="space-y-4">
                {[
                  { text: "App Store", external: true },
                  { text: "Privacy Policy", external: false },
                  { text: "Terms of Service", external: false },
                  { text: "Support", external: false },
                ].map((item) => (
                  <li key={item.text} className="text-gray-400 text-base flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 mr-3"></span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Extra info */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            Powered by AI • Designed with ❤️ • Built for the Future
          </p>
        </div>
      </div>
    </footer>
  );
}

