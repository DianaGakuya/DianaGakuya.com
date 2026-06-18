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
}

export const projectsData: Project[] = [
  {
    id: 'operations-service-app',
    title: 'Operations Service App',
    shortDescription: 'Cross-platform mobile application for field operations management with real-time tracking and reporting.',
    fullStory: `Okay, so let me tell you about this project that honestly tested every ounce of my patience and problem-solving skills! 😅 I was tasked with building an operations service app for Spiro Kenya, and girl, was it a journey!

The whole idea was to create something that field teams could use on the go—think real-time tracking, instant reporting, and seamless communication. I went with Flutter because, let's be real, who wants to write the same code twice for iOS and Android? Java came into play for some heavy backend integrations because sometimes you just need that enterprise-level reliability.

What I loved most was figuring out how to make the app work even when the internet decides to ghost you (very common in Kenya, let me tell you). I implemented offline-first architecture, which means the app stores everything locally and syncs when connectivity returns. It's like magic, but it's actually just really smart engineering! ✨`,
    techStack: ['Flutter', 'Java', 'Firebase', 'REST API', 'SQLite', 'Google Maps API'],
    challenges: 'The biggest challenge? Unreliable internet connectivity in field locations. Field teams needed to log operations data in real-time, but network coverage was spotty at best. Also, coordinating between multiple teams across different locations required precise GPS tracking and efficient data synchronization.',
    solutions: 'I implemented an offline-first architecture using SQLite for local storage. Data gets cached locally and automatically syncs when connectivity returns. For GPS tracking, I optimized battery usage by implementing smart location tracking that only activates when needed. Added background sync workers that handle data uploads intelligently.',
    outcome: 'The app now handles 200+ daily active users across Kenya. Field operations efficiency improved by 45%, and data reporting time reduced from hours to minutes. Teams love the offline capability, and management loves the real-time dashboards!',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
    year: '2025',
  },
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
  },
  {
    id: 'calendar-app',
    title: 'Calendar App',
    shortDescription: 'Elegant calendar application with event management and team collaboration features.',
    fullStory: `This calendar app was born out of pure frustration with existing solutions that were either too complicated or too basic! 🗓️ I wanted something that was beautiful, intuitive, and actually helpful for managing a chaotic schedule (which, let's be honest, is every software engineer's life).

I focused on making it feel effortless—drag and drop events, color-coding that makes sense, reminders that don't make you want to throw your phone, and collaboration features for team events. The UI is minimalist but powerful, with smooth animations that make scheduling feel less like a chore.

The collaboration feature is my favorite! You can share calendars with team members, propose meeting times, and see everyone's availability without the awkward "are you free on Tuesday?" email chains. Plus, it syncs across devices, so you're never caught off-guard! ✨`,
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI', 'Express.js'],
    challenges: 'Handling real-time synchronization across multiple users and devices without conflicts. Creating an intuitive drag-and-drop interface that works smoothly on different screen sizes. Managing time zones for international teams.',
    solutions: 'Implemented WebSocket connections using Socket.io for real-time updates. Used operational transformation for conflict resolution when multiple users edit simultaneously. Built a responsive drag-and-drop system with touch support. Integrated moment-timezone for accurate time zone handling.',
    outcome: 'Used by 50+ teams for collaborative scheduling. 4.8/5 user satisfaction rating. 80% reduction in scheduling conflicts reported by users. Average of 30 minutes saved per week per user on calendar management!',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: 'multiplayer-poker-game',
    title: 'Multiplayer Poker Game',
    shortDescription: 'Real-time multiplayer poker game with WebSocket communication and smart matchmaking.',
    fullStory: `Alright, this one was pure fun! 🎲 I mean, who doesn't want to build a game, right? I created this multiplayer poker game that lets you play with friends (or strangers, if you're feeling brave) in real-time.

The technical challenge was making everything feel instant—like, you raise the bet and everyone sees it immediately. No lag, no "wait, did that go through?" moments. WebSockets to the rescue! I built a super-responsive backend that handles all the game logic, player actions, and makes sure nobody's cheating (because trust me, people will try 😅).

The matchmaking system is pretty smart too—it pairs players based on skill level so you're not getting destroyed by poker pros on your first game. And I added fun touches like custom avatars, emojis during gameplay, and a chat feature because half the fun of poker is the banter! The whole thing taught me so much about real-time systems and concurrent programming. Plus, I got pretty good at poker! 😂`,
    techStack: ['JavaScript', 'Node.js', 'WebSocket', 'Redis', 'Express.js', 'MongoDB', 'Socket.io'],
    challenges: 'Managing game state consistency across multiple connected clients in real-time. Preventing cheating and ensuring fair gameplay. Handling disconnections gracefully without disrupting the game for others.',
    solutions: 'Implemented authoritative server architecture where all game logic runs server-side. Used Redis for fast in-memory game state storage. Built a reconnection system that lets players rejoin if disconnected. Added anti-cheat measures by validating every action server-side.',
    outcome: 'Peak of 150 concurrent players online. Average game latency of 20ms. 4.5/5 rating on engagement. Zero reported cases of successful cheating. Players average 3.5 games per session!',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: 'devops-pipeline',
    title: 'Mobile Adventure Game',
    shortDescription: 'Engaging mobile game with stunning graphics, smooth animations, and addictive gameplay mechanics.',
    fullStory: `Building a mobile game has always been a dream of mine, and I finally made it happen! 🎮 This adventure game combines beautiful visuals, smooth gameplay, and just the right amount of challenge to keep players coming back.\n\nThe development process was a blast—literally! I got to dive deep into game physics, animation systems, and performance optimization. Creating fluid character movements and responsive controls that feel natural on a touchscreen was trickier than I expected, but so rewarding when everything clicked!\n\nI implemented a level progression system, power-ups, achievements, and even added some Easter eggs for players who explore thoroughly (because what's a game without secrets?). The art style is colorful and playful, with smooth transitions and particle effects that make every action feel satisfying. Performance optimization was crucial—nobody wants a laggy game—so I spent a lot of time ensuring 60fps even on older devices. The result? A fun, polished game that I'm genuinely proud of and actually enjoy playing! 🌟`,
    techStack: ['Unity', 'C#', 'Mobile SDKs', 'Firebase Analytics', 'In-App Purchases', 'AdMob'],
    challenges: 'Optimizing performance across different mobile devices with varying capabilities. Creating intuitive touch controls that feel responsive. Balancing game difficulty to be challenging but not frustrating. Managing memory efficiently to prevent crashes.',
    solutions: 'Implemented object pooling to reduce garbage collection. Used sprite atlases and compressed textures to minimize memory usage. Created adaptive quality settings based on device performance. Built a comprehensive testing framework to catch issues early across multiple devices.',
    outcome: 'Published on both iOS and Android app stores. 10,000+ downloads in the first month. 4.3/5 average rating. Players average 25 minutes per session. Featured in "New & Noteworthy" section!',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop',
    year: '2024',
  },
];