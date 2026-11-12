export const services = [
  {
    title: "Web & App Development",
    description: "Mobile, desktop and web apps built end to end.",
    icon: "💻",
    details:
      "We build Android apps with Flutter, Windows desktop apps with Python and Flet, and web apps with React. From the first idea to publishing on Google Play, we handle the full process.",
    features: [
      "Flutter & Dart",
      "React & TypeScript",
      "Python & Flet",
      "Android & Windows",
      "Google Play Publishing",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Server Development",
    description: "Databases, APIs and server-side logic.",
    icon: "🗄️",
    details:
      "We design and run the backend behind your app: databases, user accounts, APIs and data handling. We have worked with large datasets, including cleaning and organizing over 100,000 records.",
    features: [
      "Supabase & PostgreSQL",
      "Node.js & Python",
      "REST APIs",
      "Authentication & Roles",
      "Data Import & Cleanup",
      "OCR Digitization",
    ],
  },
  {
    title: "Business Software & POS",
    description: "Billing, inventory and quotation systems for shops.",
    icon: "🧾",
    details:
      "We build point-of-sale and quotation software for small trades and shops. Price lists, stock and sales are automated, and customers get clean PDF quotations instead of manual calculation.",
    features: [
      "Point of Sale",
      "Inventory Tracking",
      "PDF Quotations",
      "Price-List Automation",
      "Windows & Android",
      "Custom Workflows",
    ],
  },
  {
    title: "Cloud Sync & Dashboards",
    description: "Apps that work offline and sync to the cloud.",
    icon: "☁️",
    details:
      "We build apps that keep working without internet and sync to the cloud when connected, with admin dashboards to manage users and track usage.",
    features: [
      "SQLite to Supabase Sync",
      "Offline-First Apps",
      "User Management",
      "In-App Analytics",
      "Free, Regular & Premium Plans",
      "Admin Dashboards",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Thai Calc Pro",
    category: "Mobile App",
    description: "Aluminium window and door cost calculator",
    image: "/thaical.png",
    details:
            "An Android subscription-based app that calculates aluminium window and door costs from a price-list database in seconds, covering Swing, Fixed, Curtain, Euro and more. It reached 1,300+ registered users and 400+ weekly active users in about 3 months with no paid advertising, and holds a 4.8★ rating on Google Play. It offers three plans, Free, Regular and Premium, along with user management and an in-app analytics dashboard.",    tech: ["Flutter", "Dart", "Supabase"],
    link: "https://play.google.com/store/apps/details?id=com.mdalif999.thaical.thaical",
  },
  {
    id: 2,
    title: "Bogura Khondokar Traders POS",
    category: "Desktop POS",
    description: "POS and quotation system for a fabrication business",
    image: "/bkt.png",
    details:
            "A complete Windows system for a Thai aluminium business, covering sales and stock in one place. It tracks inventory of aluminium profiles, glass and hardware, records every sale, and manages scrap profiles so leftover pieces are not wasted. This project has been delivered to our client, so no public demo is available yet. A public version is planned.",    tech: ["Python", "Flet", "Supabase"],
    link: null,
  },
  {
    id: 3,
    title: "City Glass Art POS",
    category: "Desktop POS",
    description: "Custom POS for a glass and profile business",
    image: "/city.png",
    details:
      "A custom Windows point-of-sale application developed and handed over to a glass art business for daily sales and inventory.",
    tech: ["Python", "Flet", "Supabase"],
    link: null,
  },
  {
    id: 4,
    title: "Thai Aluminium Mobile POS",
    category: "Mobile POS",
    description: "Calculation, sales and quotations from a phone",
    image: "/thaipos.jpeg",
    details:
           "The mobile version of the aluminium POS for Android. Shop owners can record sales, check stock and manage scrap profiles directly from their phone. It is currently in a trial phase with 50+ users, helping us improve the experience before the full release.",    tech: ["Flutter", "Supabase"],
    link: null,
  },
  {
    id: 5,
    title: "Zakir's BCS Specials",
    category: "Backend",
    description: "Backend and question database for a BCS preparation platform",
    image: "https://placehold.co/600x400/ff6600/white?text=Zakir%27s+BCS+Specials",
    details:
      "Backend and data work for Zakir's BCS Specials, a BCS preparation platform with over a million followers. For about a year, our team digitized books using OCR, formatted and uploaded questions, and built question sets for students. In total, more than 100,000 questions were organized and sorted. We also managed 2,000+ video and live classes on the platform.",
    tech: ["Backend", "OCR", "Data Management", "Video Classes"],
    link: "https://www.facebook.com/ZakirsBCSspecials",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "NA",
    post: "Founder",
    details:
      "He is the Founder of DeshTec and a CSE student at Varendra University. He builds business software for small trades and shops, including Thai Calc Pro, an Android app on the Play Store used by over 1,300 people, with 400+ weekly active users. Before DeshTec, he spent about a year working on the backend of Zakir's BCS Specials, a BCS preparation platform with over a million followers, where he digitized books using OCR, formatted and uploaded questions, and built question sets. He has organized more than 100,000 questions.",
    image:
      "https://placehold.co/400x400/ff6600/white?text=A",
    short: "CSE student at Varendra University, building DeshTec.",
  },
  {
    id: 2,
    name: "Khondokar Sakib Ullah",
    post: "Advisor",
    details:
      "Khondokar Sakib Ullah advises DeshTec with strong real-life business experience. He works mainly in the Thai aluminum industry and is a dealer for several brands in Bogura.",
    image:
      "/sakib.png",
    short: "Thai aluminum dealer in Bogura, advising on real-world business.",
  },
  {
    id: 3,
    name: "Dr. Sahan Sadeeq Rafee",
    post: "Advisor",
    details:
      "Dr. Sahan Sadeeq Rafee is a dental doctor and an entrepreneur who runs several businesses. He advises DeshTec mainly on marketing strategy and business growth, and occasionally supports the company with investment. He is passionate about apps and websites, and brings a practical view of how real customers think.",
    image:
      "/Rafee.jpeg",
    short: "Dentist and entrepreneur, advising DeshTec on marketing and growth.",
  },
];

export const contacts = [
  { icon: "📧", label: "Email", text: "deshtec999@gmail.com", href: "mailto:deshtec999@gmail.com" },
  { icon: "📞", label: "Phone", text: "+8801305232039", href: "tel:+8801305232039" },
  { icon: "💬", label: "WhatsApp", text: "Chat on WhatsApp", href: "https://wa.me/8801710460274", external: true },

  { icon: "💻", label: "GitHub", text: "mdalif999", href: "https://github.com/mdalif999", external: true },
  { icon: "📍", label: "Location", text: "Bangladesh" },
];

export const facts = [
  { label: "Founded", value: "2024" },
  { label: "Based in", value: "Bangladesh" },
  { label: "Team", value: "Founder + 2 Advisors" },
];