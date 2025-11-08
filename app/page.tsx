import Link from "next/link";
import Image from "next/image";

interface App {
  trackId: number;
  trackName: string;
  artworkUrl512: string;
  artworkUrl100: string;
  description: string;
  trackViewUrl: string;
  averageUserRating?: number;
  userRatingCount?: number;
  genres: string[];
  releaseDate: string;
  formattedPrice?: string;
}

interface AppStoreResponse {
  resultCount: number;
  results: App[];
}

// Fallback static app data
const staticApps: App[] = [
  {
    trackId: 1,
    trackName: "Example App",
    artworkUrl512: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/12/34/56/12345678-1234-1234-1234-123456789012/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/12/34/56/12345678-1234-1234-1234-123456789012/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
    description: "Example AI App",
    trackViewUrl: "https://apps.apple.com",
    genres: ["Entertainment"],
    releaseDate: "2024-01-01",
  },
];

async function fetchApps(): Promise<App[]> {
  try {
    const res = await fetch(
      "https://itunes.apple.com/lookup?id=1495105773&entity=software&limit=200",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("API response not OK:", res.status);
      return staticApps;
    }

    const data: AppStoreResponse = await res.json();
    const apps = data.results.slice(1);
    
    if (apps.length === 0) {
      return staticApps;
    }
    
    return apps;
  } catch (error) {
    console.error("Error fetching apps:", error);
    return staticApps;
  }
}

export default async function Home() {
  const apps = await fetchApps();
  
  return (
    <div className="relative bg-gradient-to-br from-[#0a0612] via-[#1a0b2e] to-[#16213e] overflow-hidden">
      {/* Starry Background */}
      <div className="stars"></div>
      <div className="grid-pattern absolute inset-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-red-500/10 border border-orange-500/30 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Redefining Mobile AI Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="block text-white mb-2">Build with</span>
                <span className="inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent py-4">
                  Intelligence
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-light">
                Crafting next-generation AI applications that blend
                <span className="text-white font-medium"> cutting-edge technology </span>
                with
                <span className="text-white font-medium"> intuitive design</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/apps"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discover Apps
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <a
                href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-2xl border-2 border-orange-500/50 text-white font-bold text-lg hover:border-orange-400 hover:bg-orange-500/10 transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-xl"
              >
                App Store
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* App Showcase Grid */}
          <div className="relative mb-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
              {apps.length > 0 ? (
                apps.slice(0, 16).map((app, index) => (
                  <a
                    key={app.trackId}
                    href={app.trackViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square animate-float"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-orange-500/10 backdrop-blur-sm bg-white/5 group-hover:border-orange-500/30 transition-all group-hover:scale-110 shadow-xl hover:shadow-pink-500/30">
                      <Image
                        src={app.artworkUrl512 || app.artworkUrl100}
                        alt={app.trackName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 12.5vw"
                      />
                    </div>
                  </a>
                ))
              ) : (
                Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/10 animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  ></div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#16213e] to-[#0a0612]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Applogy</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with beautiful design to create apps that users love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Lightning Fast",
                description: "Optimized performance with cutting-edge technology for seamless user experiences.",
                gradient: "from-orange-500 to-pink-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI-Powered",
                description: "Intelligent features powered by advanced machine learning and artificial intelligence.",
                gradient: "from-pink-500 to-red-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "Beautiful Design",
                description: "Pixel-perfect interfaces that combine aesthetics with intuitive functionality.",
                gradient: "from-red-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative p-8 rounded-2xl bg-[#1a0b2e] border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Apps Published", value: apps.length > 0 ? apps.length : "10+" },
              { label: "Downloads", value: "300K+" },
              { label: "Countries", value: "150+" },
              { label: "Avg Rating", value: "4.8★" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 stars opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience AI Innovation?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our collection of innovative AI applications available on the App Store.
          </p>
          <Link
            href="/apps"
            className="inline-flex items-center px-10 py-5 text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
          >
            View All Apps
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

