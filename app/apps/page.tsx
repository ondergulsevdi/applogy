import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Apps | Applogy",
  description: "Discover our collection of innovative AI applications available on the App Store. Creative, user-friendly, and powered by artificial intelligence.",
  openGraph: {
    title: "Our Apps | Applogy",
    description: "Discover our collection of innovative AI applications available on the App Store.",
  },
};

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

async function fetchApps(): Promise<App[]> {
  try {
    // Fetch all apps by developer ID (Onder Gulsevdi)
    const res = await fetch(
      "https://itunes.apple.com/lookup?id=1495105773&entity=software&limit=200",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch apps");
    }

    const data: AppStoreResponse = await res.json();
    // Filter out the first result which is the developer info
    const apps = data.results.slice(1);
    return apps || [];
  } catch (error) {
    console.error("Error fetching apps:", error);
    return [];
  }
}

export default async function AppsPage() {
  const apps = await fetchApps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0612] via-[#1a0b2e] to-[#16213e]">
      {/* Starry Background */}
      <div className="stars"></div>
      <div className="grid-pattern absolute inset-0"></div>

      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">AI Apps</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of innovative AI applications. Each app is crafted 
            with care, creativity, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {apps.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-orange-500/20">
                <p className="text-xl text-gray-400">
                  Loading apps or no apps available at the moment.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.map((app, index) => (
                <div
                  key={app.trackId}
                  className="group relative animate-float"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  
                  <div className="relative bg-[#1a0b2e] rounded-3xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:-translate-y-2">
                    {/* App Icon */}
                    <div className="relative h-56 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-red-500/10 flex items-center justify-center p-8">
                      <div className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                        <Image
                          src={app.artworkUrl512 || app.artworkUrl100}
                          alt={app.trackName}
                          fill
                          className="object-cover"
                          sizes="144px"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* App Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                        {app.trackName}
                      </h3>

                      {/* Rating */}
                      {app.averageUserRating && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(app.averageUserRating!)
                                    ? "text-orange-400"
                                    : "text-gray-700"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-400 font-medium">
                            {app.averageUserRating.toFixed(1)}
                            {app.userRatingCount && ` (${app.userRatingCount.toLocaleString()})`}
                          </span>
                        </div>
                      )}

                      {/* Genres */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.genres.slice(0, 2).map((genre, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {app.description}
                      </p>

                      {/* CTA Button */}
                      <a
                        href={app.trackViewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                      >
                        View on App Store
                        <svg
                          className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            More Apps Coming Soon
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            We're constantly working on new and innovative AI applications. 
            Stay tuned for more exciting releases!
          </p>
          <a
            href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Follow on App Store
            <svg
              className="ml-2 w-5 h-5"
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
          </a>
        </div>
      </section>
    </div>
  );
}
