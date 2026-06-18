export interface BlogPost {
  id: string;
  title: string;
  category: 'tech' | 'coding' | 'movies' | 'lifestyle';
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'flutter-3-5-review',
    title: 'Flutter 3.5 is Here and I\'m Living for It! 🦋',
    category: 'tech',
    excerpt: 'The latest Flutter update dropped and honestly, the improvements to hot reload alone have saved my sanity this week...',
    content: `Girl, let me tell you about Flutter 3.5! I've been playing with it all week and I'm genuinely excited about some of these updates.

## Hot Reload on Steroids

First off, hot reload is even faster now. I know, I know, it was already fast, but trust me—when you're making UI tweaks at 2 AM (we've all been there), every millisecond counts! 😅

## Impeller is Production-Ready

The Impeller rendering engine is now the default for iOS, and the performance improvements are *chef's kiss*. My apps are running smoother than my morning coffee routine! The frame rates are consistently better, and those annoying jank issues? Pretty much gone.

## Material 3 Refinements

The Material 3 components got some love too. The new adaptive widgets make it so much easier to create apps that feel native on both iOS and Android. No more fighting with platform-specific quirks!

## My Hot Take

Flutter continues to be my go-to for mobile development. The community is amazing, the tooling is top-notch, and Google keeps delivering meaningful updates. If you haven't tried Flutter 3.5 yet, what are you waiting for?

Now excuse me while I refactor all my personal projects to use these new features! 💪✨`,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['Flutter', 'Mobile Dev', 'Tech Updates'],
  },
  {
    id: 'vibe-coding-setup',
    title: 'My Ultimate Vibe Coding Setup 💻✨',
    category: 'coding',
    excerpt: 'Let me show you how I transformed my workspace into a productivity paradise with the perfect blend of aesthetics and functionality...',
    content: `Okay friends, you asked for it—here's my complete coding setup tour! I believe your environment affects your code quality, so I put some serious thought into this.

## The Hardware

- **MacBook Pro M2**: This thing is a beast. I can run Docker containers, multiple IDEs, and still have battery for days.
- **LG UltraWide Monitor**: Game changer! Split-screen coding while having docs open is *everything*.
- **Mechanical Keyboard**: Cherry MX Browns. Clicky enough to be satisfying, quiet enough to not annoy people on Zoom calls.
- **Ergonomic Mouse**: Your wrist will thank you. Trust me on this one!

## The Software Stack

- **VS Code**: My main squeeze. With the right extensions, it's basically an IDE.
- **iTerm2 + Oh My Zsh**: Makes terminal work actually enjoyable.
- **Figma**: For quick UI mockups and design collaboration.
- **Spotify**: Lo-fi beats to code to, always. 🎵

## The Vibes

This is important! I have:
- LED strip lights (pink, obviously 💖)
- Plants everywhere (they're alive, I checked today!)
- A good coffee setup within arm's reach
- Natural light + blackout curtains for those late-night debugging sessions

## My Productivity Secrets

1. **Pomodoro Technique**: 25 minutes of focus, 5-minute breaks. It works!
2. **Theme Switching**: Light theme during the day, dark at night. Saves my eyes!
3. **Good Music**: Instrumental only when coding. Lyrics are too distracting!
4. **Regular Breaks**: Stand up, stretch, look away from the screen. Your body matters!

The perfect setup is personal, but I hope this gives you some inspo for yours! 💫`,
    image: 'https://images.unsplash.com/photo-1640720157809-afe044d24879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzYzNjQwNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-10',
    readTime: '7 min read',
    tags: ['Coding Setup', 'Productivity', 'Workspace'],
  },
  {
    id: 'oppenheimer-review',
    title: 'Oppenheimer: A Masterpiece That Made Me Think 🎬',
    category: 'movies',
    excerpt: 'Christopher Nolan did it again! Here\'s why Oppenheimer is more than just a biographical drama...',
    content: `Listen, I went into Oppenheimer expecting a good movie, but I came out having had an EXPERIENCE. Let me break down why this film is brilliant.

## The Cinematography is Insane

IMAX 70mm film! The visuals are absolutely stunning. Nolan's commitment to practical effects and traditional film pays off massively. Every frame could be a painting!

## Cillian Murphy's Performance

*Chef's kiss* 👨‍🍳💋 Murphy carries this film on his shoulders. The way he portrays Oppenheimer's internal conflict, genius, and eventual regret is masterful. That scene where he imagines the consequences of the bomb? Chills!

## The Non-Linear Storytelling

Classic Nolan! The film jumps between three timelines, and somehow it all makes sense and builds tension beautifully. It's like watching someone solve a complex algorithm—pieces clicking into place!

## The Sound Design

Ludwig Göransson's score is haunting. The ticking, the building tension, the sudden silences... it's anxiety-inducing in the best way possible!

## Why Tech People Should Watch This

As someone who builds technology, this film hit different. It's about the responsibility that comes with creating powerful things. Are we thinking about the consequences of what we build? Are we considering the ethical implications?

Oppenheimer created something that changed the world forever, and he spent the rest of his life grappling with that. As developers, we're building AI, algorithms, and systems that shape people's lives. This film is a reminder to think deeply about our work's impact.

## Final Verdict

10/10. Would watch again. Bring snacks though—it's 3 hours long! 🍿

What did you think? Let's discuss in the comments!`,
    image: 'https://images.unsplash.com/photo-1739433437912-cca661ba902f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MXx8fHwxNzYzNTkyOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-05',
    readTime: '6 min read',
    tags: ['Movies', 'Reviews', 'Christopher Nolan'],
  },
  {
    id: 'ai-ethics-discussion',
    title: 'Let\'s Talk About AI Ethics (It\'s Important!) 🤖',
    category: 'tech',
    excerpt: 'AI is everywhere now, but are we building it responsibly? Some thoughts from a developer in the trenches...',
    content: `Okay, we need to have this conversation! AI is in everything now—our phones, our apps, our decision-making systems. But are we thinking enough about the ethics?

## The Bias Problem

AI models are only as good as the data we feed them. And guess what? Our data is biased! I've seen firsthand how a "neutral" algorithm can produce unfair results because the training data reflected societal biases.

**What can we do?**
- Audit our datasets
- Diversify our training data
- Test for bias systematically
- Have diverse teams building AI systems

## The Transparency Issue

Many AI systems are black boxes. Even I, as a developer, sometimes can't explain exactly why an AI made a specific decision. That's... concerning, especially when these systems are making decisions about loans, job applications, or medical diagnoses!

## Privacy Matters

We're collecting SO. MUCH. DATA. And yes, it makes our AI better, but at what cost to user privacy? I'm trying to be more intentional about:
- Collecting only necessary data
- Giving users real control
- Being transparent about data usage
- Implementing strong security measures

## My Commitment

As someone building these systems, I'm committing to:
1. Always consider ethical implications upfront
2. Push for transparency in my projects
3. Advocate for responsible AI practices
4. Stay educated on AI ethics developments

## Let's Do Better

We have the power to shape how AI develops. Let's make sure we're building technology that helps everyone, not just some people. That's not idealistic—it's necessary!

What are your thoughts on AI ethics? How do you approach these issues in your work? 💭`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    date: '2024-02-28',
    readTime: '8 min read',
    tags: ['AI', 'Ethics', 'Technology'],
  },
  {
    id: 'work-life-balance',
    title: 'Real Talk: Work-Life Balance as a Developer 💼💆‍♀️',
    category: 'lifestyle',
    excerpt: 'Burnout is real, and I learned that the hard way. Here\'s how I found balance and why it matters...',
    content: `Let me be real with you all—I burned out HARD last year. I was working 12-hour days, coding on weekends, and basically living in my IDE. It wasn't sustainable, and my body let me know it!

## The Wake-Up Call

I started getting stress headaches, my sleep was terrible, and honestly? My code quality was suffering too. That's when I realized something had to change.

## What I Did

**Set Boundaries**
- No coding after 8 PM (usually 😅)
- Weekends are for REST
- I actually use my PTO now!

**Found New Hobbies**
- Started going to the gym
- Picked up reading again (not tech books!)
- Cooking became my therapy

**Learned to Say No**
This was HARD. But I can't take on every project, attend every meeting, or help with every issue. And that's okay!

**Prioritized Sleep**
8 hours minimum. Non-negotiable. Tired Dee writes bugs. Well-rested Dee writes clean code!

## The Results

- Better code quality
- More creativity
- Actual energy to enjoy life
- Healthier relationships
- Still hitting all my deadlines!

## For My Fellow Devs

You're not a machine. Your worth isn't measured by hours coded. Taking care of yourself isn't selfish—it's necessary!

Some days you'll code for 12 hours because you're in the zone and loving it. That's fine! But it can't be every day. Listen to your body, set boundaries, and remember: you're a human being, not a human doing.

Take that break. Close that laptop. Go touch some grass (I know, scary thought! 😂).

Your future self will thank you! 💖✨`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
    date: '2024-02-20',
    readTime: '6 min read',
    tags: ['Work-Life Balance', 'Mental Health', 'Developer Life'],
  },
  {
    id: 'debugging-love-letter',
    title: 'A Love Letter to Debugging 🐛💕',
    category: 'coding',
    excerpt: 'Yes, I said it! Debugging is actually... fun? Let me explain why I\'ve learned to love it...',
    content: `Controversial opinion incoming: I actually enjoy debugging! *gasp* I know, I know, but hear me out!

## It's Like Detective Work

There's something satisfying about tracking down a bug. You're Sherlock Holmes, the bug is your mystery, and the codebase is your crime scene. Console.log() is your magnifying glass! 🔍

## The Ah-Ha Moment

That moment when you finally find the bug? *Euphoric*! It's like solving a puzzle that's been annoying you for hours. The dopamine hit is real!

## You Learn SO Much

Every bug teaches you something:
- How the system really works
- Edge cases you didn't consider
- How to prevent similar issues
- Where your assumptions were wrong

## My Debugging Philosophy

1. **Don't Panic**: The bug is just undiscovered knowledge
2. **Rubber Duck It**: Explain the problem out loud (yes, I talk to my plants)
3. **Take Breaks**: Fresh eyes = fresh perspective
4. **Binary Search**: Cut the problem space in half repeatedly
5. **Git Blame**: Not to shame, but to understand context!

## Favorite Debugging Tools

- Chrome DevTools (my BFF)
- VS Code debugger
- Console.log() (classic never dies)
- Postman for API debugging
- My rubber duck named Gerald 🦆

## The Worst Bugs

We've all been there:
- Typos (looking at you, "recieve" vs "receive")
- Semicolon in the wrong place
- Using = instead of ==
- Race conditions (THE WORST)
- CSS issues (is it even debugging at this point? 😅)

## The Best Bugs

- The ones that teach you something new
- The ones you solve in 5 minutes
- The ones that make you refactor and improve the whole system
- The ones that turn into great stories

## Final Thoughts

Next time you're debugging, try to appreciate the journey! You're not just fixing code—you're becoming a better developer with every bug you squash.

Happy debugging! May your errors be obvious and your fixes be elegant! 🐛✨`,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop',
    date: '2024-02-15',
    readTime: '5 min read',
    tags: ['Debugging', 'Coding', 'Developer Life'],
  },
];
