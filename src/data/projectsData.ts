export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullStory: string;
  techStack: string[];
  challenges: string;
  solutions: string;
  outcome: string;
  image: string;
  gallery?: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  repoStatus?: string;
}

export const projectsData: Project[] = [
  {
    id: 'iot-monitoring-platform',
    title: 'DeeGakuya Personal Website',
    shortDescription: 'High-end, feminine, modern portfolio website built with React, TypeScript, and Tailwind CSS.',
    fullStory: `This is the website you're looking at right now! 💖 I wanted to create something that wasn't just another boring portfolio—I wanted it to feel like ME. Playful, professional, and packed with personality!\n\nBuilding this was such a fun challenge because I got to combine everything I love: clean code, beautiful design, and interactive elements that make people smile. From the typing animations to the mini games, every detail was crafted with care. I even added a background piano melody and hover sound effects because why not make browsing a portfolio an experience?\n\nThe tech stack is modern and efficient—React and TypeScript for robust functionality, Tailwind CSS for that premium look, and a ton of custom components. I also made sure it's fully responsive because whether you're on your phone or a massive monitor, it should look gorgeous! This project really showcases my skills in full-stack development, UI/UX design, and attention to detail. Plus, it's just fun to work on something that's uniquely yours! ✨`,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/UI', 'Web Audio API'],
    challenges: 'Creating a unique design that stands out while remaining professional and accessible. Implementing interactive features like games and audio without sacrificing performance. Making sure the personality shines through without being overwhelming.',
    solutions: 'Used a cohesive design system with pastel pink accents and soft shadows. Implemented Web Audio API for background music and sound effects. Created reusable components for consistency. Added playful elements like cat GIFs and mini games strategically placed throughout the site.',
    outcome: 'A one-of-a-kind portfolio that truly represents my personality and skills! Positive feedback on the unique design and interactive elements. The site successfully showcases my work while being enjoyable to browse. It\'s become a conversation starter in interviews!',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
    year: '2025',
    liveUrl: 'https://dianagakuya.com',
    githubUrl: 'https://github.com/DianaGakuya/DianaGakuya.com',
    repoStatus: 'Public GitHub repo — owned by Diana',
  },
  {
    id: 'food-diary-api',
    title: 'Food Diary API',
    shortDescription: 'RESTful API for nutrition tracking with user authentication and meal planning features.',
    fullStory: `Okay, confession time: I built this API partly because I was tired of not knowing what I ate yesterday! 😂 But also because I wanted to create something that could help people track their nutrition journey in a way that's actually useful and not overwhelming.

This API is super robust—it handles everything from user authentication (secure AF, by the way) to complex meal planning. You can log your meals, track macros, set goals, and even get suggestions based on your dietary preferences. I made sure to add features that I personally would want, like quick logging for those chaotic days when you're eating lunch while debugging code!

The best part? I designed it to be super easy for frontend devs to integrate. Clean endpoints, comprehensive documentation, and responses that actually make sense. Because we've all dealt with APIs that make you want to flip your desk, and I wasn't about to create another one of those! 💪`,
    techStack: ['Django', 'Python', 'Django REST Framework', 'PostgreSQL', 'JWT Authentication', 'Celery', 'Redis'],
    challenges: 'Designing a flexible data model that could handle different dietary requirements and meal types while maintaining query performance. Also, ensuring secure authentication and implementing rate limiting to prevent abuse.',
    solutions: 'Created a normalized database schema with efficient indexing. Implemented JWT tokens for stateless authentication. Used Redis for caching frequently accessed data like food items and common meals. Added Celery for background tasks like sending daily nutrition summaries.',
    outcome: 'API serves 1000+ requests per day with an average response time of 50ms. Successfully integrated by 3 client applications. 95% positive feedback on API documentation clarity. Zero security incidents since launch!',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
    year: '2024',
    liveUrl: 'https://foodlog.xyz',
    githubUrl: 'https://github.com/PeteZDj/foodlog.xyz',
    repoStatus: 'Public GitHub repo — read access only, not yet a collaborator',
  },
  {
    id: 'zawadihub',
    title: 'ZawadiHub',
    shortDescription: "Kenya's smartest gifting platform — create registries, gift in groups, and pay with M-Pesa. Built for how Kenyans actually celebrate.",
    fullStory: `Okay, so this one came from a very real frustration I'm sure every Kenyan can relate to! 😤 You know that moment when someone's getting married or having a baby shower and you're desperately trying to figure out what to buy them—and then you end up showing up with the exact same thing as three other people? Yeah. That. I built ZawadiHub to fix that, the Kenyan way!

Harambee and group gifting isn't just a tradition here—it's literally in our DNA. So I designed the whole platform around that culture first. The M-Pesa integration isn't bolted on as an afterthought; it's the heart of how payments work, because let's be honest, who carries cards anymore? 😂 I also added full Swahili language support and a marketplace of 350+ verified Kenyan shops so you're actually supporting local businesses while you celebrate someone you love!

The technical side was a proper full-stack adventure—Next.js App Router, Prisma with SQLite for lightning-fast data, and NextAuth for one-click Google Sign-In. My favourite feature is guest mode: users get full functionality immediately with zero sign-up friction, because nothing kills the vibe of a gifting platform like a boring registration wall. The platform handles registries for weddings, baby showers, birthdays, graduations—basically every reason Kenyans come together, eat nyama choma, and celebrate life! 🇰🇪✨`,
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite', 'NextAuth', 'M-Pesa API', 'Framer Motion'],
    challenges: 'Building a payment experience that feels native to Kenyan users while gracefully supporting M-Pesa, cards, and PayPal simultaneously. Designing group gifting flows where multiple contributors can chip in toward a single gift without anyone getting confused or duplicating. Making the marketplace feel curated and trustworthy, not like a random list.',
    solutions: 'Designed M-Pesa as the default, primary payment method—not an option buried in a dropdown. Used Next.js server-side rendering for fast initial loads and good SEO so registries are easy to share. Built a real-time contribution tracker with animated progress bars so gift-givers can see the impact of their contribution immediately. Guest mode lets users experience the full platform before committing to an account.',
    outcome: 'Live at zawadihub.com, handling real gift registries and group gifting events. The marketplace features 350+ verified Kenyan partner shops across categories. Group gifting flows for Secret Santa, birthday pools, and harambee-style events work seamlessly. M-Pesa payments feel as natural as sending a mobile money transfer—because they basically are! 🎁',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop',
    year: '2025',
    liveUrl: 'https://zawadihub.com',
    githubUrl: 'https://github.com/PeteZDj/zawadihub',
    repoStatus: 'Private GitHub repo — Diana is a collaborator',
  },
  {
    id: 'afrosoftware',
    title: 'AfroSoftware',
    shortDescription: "Full-stack platform for Afrosoftware — company site, client portfolio showcase, blog, investment portal, and admin/client dashboards.",
    fullStory: `AfroSoftware is the company site and internal platform I've been building and maintaining since 2023 as Software Engineer & Digital Strategy Lead. It's not just a marketing page — it's a full application with authentication, a blog engine, a dynamic portfolio gallery, a contact pipeline, and even an investment/tender portal for business opportunities.\n\nI built separate dashboards for admins and clients so each side only sees what's relevant to them, and wired up Google OAuth alongside classic email/password auth secured with bcrypt. Behind the scenes it runs on a lightweight Express + better-sqlite3 backend, which keeps deploys and backups simple on our own Windows Server/IIS setup rather than depending on a hosted database.\n\nThis site is also the foundation the rest of the Afrosoftware ecosystem (GoDriving, ZawadiHub, Foodlog) shares standardized OAuth/OpenID Connect authentication with, which I designed and rolled out across all of them.`,
    techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Node.js', 'Express', 'better-sqlite3', 'Google OAuth'],
    challenges: 'Building one platform that serves marketing content, a blog, a portfolio, and authenticated admin/client dashboards without the codebase turning into a mess. Also standardizing authentication so it could be reused cleanly across other Afrosoftware products.',
    solutions: 'Split the app into clear route-level sections with role-based dashboards, and centralized the OAuth/OpenID Connect setup so GoDriving, ZawadiHub, and Foodlog could all plug into the same auth pattern. Used better-sqlite3 for a fast, dependency-light backend that is easy to run and back up on our own IIS server.',
    outcome: 'Live company platform handling client engagement, portfolio showcasing, and internal admin/client workflows for Afrosoftware, and the shared auth blueprint for three other products in the ecosystem.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    year: '2023 – Present',
    liveUrl: 'https://afrosoftware.com',
    githubUrl: 'https://github.com/PeteZDj/afrosoftware.com',
    repoStatus: 'Private GitHub repo — Diana is a collaborator',
  },
  {
    id: 'docall-app',
    title: 'DoCall',
    shortDescription: 'Web-based customer service calling platform — replaces phone numbers with instant browser calls, AI concierge, and real-time team collaboration.',
    fullStory: `DoCall (docall.app) reimagines what a company "support line" looks like — instead of a phone number, customers click a button and get an instant web call, routed intelligently to the right agent based on skill, department, priority, and availability.\n\nI worked on the call management side: live dashboards for active calls, queue monitoring, and call history with recordings and transcripts. There's also an AI concierge that picks up when no agent is available, and Facebook-style real-time messaging between team members with presence indicators, so support teams can coordinate without leaving the app.\n\nIt's built multi-tenant from the ground up — a single platform serves multiple client companies at once, each with its own branding, timezone display, and role-based access across six role types (Admin, Manager, Supervisor, Agent, Billing, Finance).`,
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Node.js', 'WebSockets'],
    challenges: 'Handling real-time call state, presence, and messaging across a multi-tenant platform where every client company needs isolated data but shares the same infrastructure. Keeping the interface usable across desktop, tablet, and a native-feeling mobile PWA.',
    solutions: 'Built role-based access control with six distinct role types, dynamic per-company theming, and a real-time messaging layer with presence indicators. Designed the mobile experience as a installable PWA with bottom tab navigation for a native-app feel.',
    outcome: 'Live at docall.app, running real-time call routing, live dashboards, and team messaging for support teams across multiple client companies.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
    year: '2025',
    liveUrl: 'https://docall.app',
    githubUrl: 'https://github.com/PeteZDj/docall-app',
    repoStatus: 'Private GitHub repo — Diana is a collaborator',
  },
  {
    id: 'openclaw-agent',
    title: 'OpenClaw Server Gateway',
    shortDescription: "Afrosoftware's AI-agent infrastructure — a PowerShell background service on Windows Server paired with a Telegram bot for secure remote administration.",
    fullStory: `This is infrastructure most people never see, but it's some of my favorite engineering work. OpenClaw (alongside a companion Hermes Agent) runs as persistent background services on our Windows Server, integrated with OpenRouter APIs to power automated operations and marketing content workflows across the Afrosoftware ecosystem.\n\nThe part I'm proudest of is the command gateway: a Telegram bot built on the BotFather API that lets authorized team members securely trigger and monitor server-side operations remotely, without needing to RDP into the box. Every command and log that passes through the gateway runs through regex-based redaction I built to automatically mask sensitive tokens — Stripe keys, AWS credentials, database URIs, JWTs — before anything is logged or displayed, so operational visibility never comes at the cost of leaking secrets.\n\nIt's the kind of unglamorous, security-conscious plumbing that keeps everything else running safely in the background.`,
    techStack: ['PowerShell', 'Node.js', 'OpenRouter API', 'Telegram Bot API (BotFather)', 'Windows Server', 'NSSM'],
    challenges: 'Giving the team secure remote command access to production servers without opening up broad remote-desktop access, while making sure sensitive credentials never leak into logs or chat transcripts that pass through the gateway.',
    solutions: 'Built a Telegram-based command gateway with authenticated access as the remote control surface, running OpenClaw and Hermes Agent as persistent Windows services via NSSM. Implemented regex-based log redaction that automatically masks Stripe, AWS, database, and JWT tokens across every server gateway and transcript.',
    outcome: 'Powers day-to-day automated operations and marketing content workflows for Afrosoftware, with secure authenticated remote administration and zero incidents of credential leakage since redaction was implemented.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    year: '2024 – Present',
    repoStatus: 'Internal infrastructure — not a public repo',
  },
  {
    id: 'godriving',
    title: 'GoDriving.xyz',
    shortDescription: 'Gamified driver-education platform — learn road signs and the highway code through games, and connect with trusted local driving schools.',
    fullStory: `GoDriving teaches the highway code the way it should be taught: by playing. I designed and built this from the ground up — a Sign Library for studying every road sign without needing to log in, Sign Match (a memory game pairing signs to meanings), a timed Highway Code Quiz with streaks and bonuses, and Road Run, an arcade-style lane-driving game where you dodge traffic and collect coins.\n\nI wrote the game engines and CSS keyframe animation for all of these modes myself, layered account creation and gamification on top (XP, coins, levels, global leaderboards), and built a searchable driving-school directory so learners can find and request enrollment with verified local schools — with a partner programme letting schools apply and share revenue.\n\nStarted for the Kenyan market, built to grow across East Africa and beyond.`,
    techStack: ['React 18', 'TypeScript', 'Vite 6', 'React Router 7', 'Tailwind CSS v4', 'Motion', 'Node.js', 'Express', 'PostgreSQL'],
    challenges: 'Building multiple custom 2D game engines (matching, quiz, arcade lane-driving) that all needed to feel responsive and fun while sharing a single gamification and account system underneath. Connecting learners to real driving schools in a way that generates genuine leads, not just page views.',
    solutions: 'Built each game mode as its own lightweight engine using vanilla JavaScript and CSS keyframe animation for performance, unified under one XP/coins/leveling system with global and per-game leaderboards. Designed a student-to-school lead pipeline where learner enrollment requests go directly to schools, with a revenue-share partner programme to keep schools engaged.',
    outcome: 'Live at godriving.xyz with a growing library of games, a searchable verified driving-school directory, and an active leaderboard-driven learner community.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop',
    year: '2024 – Present',
    liveUrl: 'https://godriving.xyz',
    githubUrl: 'https://github.com/PeteZDj/godriving.xyz',
    repoStatus: 'Public GitHub repo — Diana is a collaborator',
  },
  {
    id: 'soundpull',
    title: 'SoundPull',
    shortDescription: 'Full-stack Spotify music downloader — pulls playlists, albums, and tracks with organized storage and user account management.',
    fullStory: `SoundPull lets users download Spotify playlists, albums, and individual tracks with everything neatly organized and tied to user accounts. It's a full-stack app pairing a Python backend with a React frontend, packaged so it can be spun up locally with a single install script or run entirely through Docker.\n\nMy focus was on making the whole experience painless — from a one-command install and start flow, to an admin panel for managing the service, to reliable download handling that doesn't fall over on large playlists.`,
    techStack: ['Python', 'FastAPI', 'React', 'Docker', 'Spotify API'],
    challenges: 'Reliably downloading and organizing large playlists and albums without hitting rate limits or losing track of user-specific storage. Making setup simple enough that it does not require deep technical knowledge to run.',
    solutions: 'Built a FastAPI backend to handle download orchestration and a React frontend for browsing and managing downloads, with an admin panel for oversight. Packaged the whole stack with Docker Compose and one-command install/start scripts for both Windows and Unix.',
    outcome: 'Live at soundpull.xyz, handling playlist, album, and track downloads with organized per-user storage.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop',
    year: '2025',
    liveUrl: 'https://soundpull.xyz',
    githubUrl: 'https://github.com/PeteZDj/soundpull.xyz',
    repoStatus: 'Private GitHub repo — Diana is a collaborator',
  },
  {
    id: 'workgrids',
    title: 'WorkGrids',
    shortDescription: 'Internal workforce visibility and time-tracking platform for Afrosoftware — transparent by design, not spyware.',
    fullStory: `WorkGrids is Afrosoftware's internal workforce productivity and time-tracking platform — think Hubstaff, but built as a transparent system where staff always know when tracking is active and every productivity score is explainable and reviewable by the person it's about.\n\nIt's an API-first platform: one ASP.NET Core backend (Clean Architecture — Domain, Application, Infrastructure, Api) serves a React + TypeScript dashboard for admins and staff, a Windows desktop tracking agent that lives in the system tray, and a .NET MAUI mobile companion app. I'm currently building this out across all four layers, with PostgreSQL/EF Core for data, Hangfire for background jobs, and JWT-based auth with role-based access control throughout.`,
    techStack: ['ASP.NET Core (.NET 10)', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'EF Core', 'Hangfire', '.NET MAUI'],
    challenges: 'Designing a productivity-tracking system that stays genuinely transparent instead of feeling like surveillance — every score needs to be explainable, and every user needs to be able to see exactly what data is collected about them. Also keeping one clean architecture consistent across a web dashboard, a desktop tray agent, and a mobile app.',
    solutions: 'Built an explainable ProductivityCalculator in the Application layer so every score has a traceable reasoning behind it, with an audit log entities model so activity is reviewable rather than opaque. Enforced a strict Domain → Application → Infrastructure → Api dependency direction so the desktop agent, mobile app, and web dashboard all talk to the same well-defined API contracts.',
    outcome: 'In active development for internal Afrosoftware use — backend, dashboard, desktop agent, and mobile companion are all underway.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    year: '2025 – Present',
    repoStatus: 'Local git repo initialized — not yet pushed to GitHub',
  },
  {
    id: 'yorkxpress',
    title: 'YorkXpress Rebuild',
    shortDescription: 'Led the migration of YorkXpress from a legacy Wix site to a modern Next.js application with server-side rendering.',
    fullStory: `YorkXpress needed to move off Wix — slow, hard to extend, and limiting for a localized vendor-listings business. I led the full rebuild into a modern Next.js application, then deployed it to our Windows Server 2025 IIS environment with a custom reverse-proxy setup (URL Rewrite + NSSM) so the Node.js app runs as a persistent background service just like a native IIS site.\n\nBeyond the framework swap, this was about getting real server-side rendering for localized vendor listings — better SEO, faster loads, and a codebase the team can actually extend, instead of fighting a page builder.`,
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Windows Server IIS', 'URL Rewrite', 'NSSM'],
    challenges: 'Migrating years of content and vendor listings off a proprietary Wix export with no clean data model, while standing up a Node.js SSR app on IIS — a Windows web server not originally built with Node in mind.',
    solutions: 'Rebuilt the site structure and vendor listing data model natively in Next.js, then configured IIS URL Rewrite as a reverse proxy in front of the Node.js server process, keeping it alive as a persistent service with NSSM so it behaves like any other IIS-hosted site.',
    outcome: 'Live at yorkxpress.com, running server-side rendered pages for localized vendor listings with meaningfully better SEO and load times than the old Wix site.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    year: '2025',
    liveUrl: 'https://yorkxpress.com',
    githubUrl: 'https://github.com/DianaGakuya/yorkxpress',
    repoStatus: 'Private GitHub repo — owned by Diana',
  },
];