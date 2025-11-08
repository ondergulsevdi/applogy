# Applogy Official Website

> **Smart AI. Simple Apps.** Where Creativity Meets AI.

Modern, fast, and SEO-optimized website for Applogy - an AI app studio that develops creative, user-friendly, and App Store-ready AI applications.

## 🚀 Features

- ✨ Modern AI-inspired gradient UI design
- 📱 Fully responsive (mobile-first approach)
- 🎯 SEO optimized with metadata, Open Graph tags, and structured data
- 🔄 Dynamic App Store API integration
- 📊 Google Analytics 4 ready
- 🎨 Beautiful animations and transitions
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎨 Styled with Tailwind CSS

## 📁 Project Structure

```
Applogy/
├── app/
│   ├── about/          # About page
│   ├── apps/           # Apps listing page
│   ├── contact/        # Contact form page
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Home page
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── robots.ts       # Robots.txt generation
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── StructuredData.tsx  # JSON-LD structured data
│   └── GoogleAnalytics.tsx # GA4 integration
├── public/             # Static assets
└── read.me            # Project PRD
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 18, App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)
- **Analytics:** Google Analytics 4
- **API:** App Store Search API

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📱 Pages

### Home (`/`)
- Hero section with animated gradient background
- Company introduction
- Feature highlights
- Call-to-action buttons

### Our Apps (`/apps`)
- Dynamically fetches apps from App Store API
- App cards with icons, ratings, and descriptions
- Direct links to App Store

### About (`/about`)
- Company story and mission
- Founder information (Önder Gülsevdi)
- Technology stack showcase

### Contact (`/contact`)
- Contact form with validation
- Success/error states
- API endpoint for form submissions

## 🔧 Configuration

### Google Analytics
Add your GA4 Measurement ID to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### App Store API
The app automatically fetches from:
```
https://itunes.apple.com/lookup?id=1495105773&entity=software
```

To change the developer ID, update the URL in `app/apps/page.tsx`.

## 🎨 Customization

### Colors
Modify the gradient colors in `tailwind.config.ts`:
```typescript
backgroundImage: {
  'gradient-ai': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, ...)',
}
```

### Content
- Update company info in `app/about/page.tsx`
- Modify hero text in `app/page.tsx`
- Change footer links in `components/Footer.tsx`

## 📊 SEO Features

- ✅ Optimized metadata for all pages
- ✅ Open Graph tags for social sharing
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ JSON-LD structured data (Organization, WebSite)
- ✅ Semantic HTML
- ✅ Performance optimized (Core Web Vitals)

## 🔗 Important Links

- **App Store Developer Page:** [https://apps.apple.com/developer/onder-gulsevdi/id1495105773](https://apps.apple.com/developer/onder-gulsevdi/id1495105773)
- **Documentation:** [Next.js Docs](https://nextjs.org/docs)
- **Deployment:** [Vercel](https://vercel.com)

## 📈 Performance Goals

- **Lighthouse Scores:**
  - Performance: ≥ 90
  - SEO: ≥ 95
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90

## 🤝 Contact Form Integration

The contact form currently logs submissions to the console. To enable email sending:

1. **Option 1: Resend (Recommended)**
   ```bash
   npm install resend
   ```
   Add API key to `.env.local` and update `app/api/contact/route.ts`

2. **Option 2: SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```
   Configure in the API route

3. **Option 3: Formspree**
   Use their free plan and update the form action

## 📝 License

© 2025 Applogy. All rights reserved.  
Founded by Önder Gülsevdi.

## 🎯 Future Enhancements

- [ ] Blog section for AI & app updates
- [ ] Dark/light mode toggle
- [ ] AI chatbot ("Ask Applogy")
- [ ] App demo videos
- [ ] Multi-language support

---

Built with ❤️ using Next.js 14 and Tailwind CSS

