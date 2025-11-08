import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Applogy",
  description: "Learn about Applogy, founded by Önder Gülsevdi. We're an AI app studio dedicated to creating innovative, user-friendly applications that inspire and delight.",
  openGraph: {
    title: "About Us | Applogy",
    description: "Learn about Applogy, founded by Önder Gülsevdi. We're an AI app studio dedicated to creating innovative applications.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative bg-gradient-to-br from-[#0a0612] via-[#1a0b2e] to-[#16213e]">
      {/* Starry Background */}
      <div className="stars fixed inset-0 pointer-events-none"></div>
      <div className="grid-pattern fixed inset-0 pointer-events-none"></div>

      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Applogy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where creativity meets artificial intelligence to create extraordinary experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Applogy was founded by <span className="text-orange-400 font-semibold">Önder Gülsevdi</span>, a passionate developer and 
                entrepreneur with a vision to democratize artificial intelligence through intuitive, 
                accessible mobile applications. What started as a personal mission to explore the 
                possibilities of AI has grown into a creative studio dedicated to building apps that 
                inspire and empower users worldwide.
              </p>
              <p className="text-lg">
                At Applogy, we believe that technology should be both powerful and simple. Every app 
                we create is designed to harness the capabilities of modern AI while maintaining an 
                elegant, user-friendly interface that anyone can enjoy. We don't just build software — 
                we craft experiences that blend innovation with simplicity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To create AI-powered applications that are innovative, simple, and creative — 
              making advanced technology accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-[#1a0b2e] p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We push the boundaries of what's possible with AI, constantly exploring new 
                  technologies and creative solutions to solve real-world problems.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-[#1a0b2e] p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Simplicity</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complex technology doesn't mean complex interfaces. We design apps that are 
                  intuitive and delightful, ensuring everyone can benefit from AI.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-[#1a0b2e] p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Creativity</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every app we build is a creative endeavor, blending artistry with technology 
                  to deliver unique and inspiring experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build fast, reliable, and innovative applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Artificial Intelligence", icon: "🤖" },
              { name: "Machine Learning", icon: "🧠" },
              { name: "Swift & SwiftUI", icon: "📱" },
              { name: "Next.js", icon: "⚡" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Computer Vision", icon: "👁️" },
              { name: "Natural Language Processing", icon: "💬" },
              { name: "Core ML", icon: "🔮" },
            ].map((tech, index) => (
              <div
                key={index}
                className="relative group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 text-center transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="/apps"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-orange-500 rounded-2xl hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105"
            >
              View Our Apps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
