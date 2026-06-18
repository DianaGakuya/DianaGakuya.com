import React from 'react';
import { Code, Palette, Tv, Mountain, Camera, Film, Heart } from 'lucide-react';
import { Card } from './ui/card';

export function Interests() {
  const interests = [
    {
      icon: Code,
      title: 'Coding',
      description: "There's something magical about turning coffee into code! I love solving complex problems and building things that make people's lives easier.",
      gif: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
    },
    {
      icon: Palette,
      title: 'Design',
      description: "Beautiful code deserves a beautiful interface! I'm passionate about creating elegant, user-friendly designs that feel effortless.",
      gif: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
    },
    {
      icon: Tv,
      title: 'Watching Cartoons',
      description: "Yes, I'm an adult who loves cartoons! They're fun, creative, and honestly, some have better plot twists than most dramas. 😄",
      gif: 'https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif',
    },
    {
      icon: Mountain,
      title: 'Hiking',
      description: "Nothing beats the feeling of fresh air and conquering a trail! It's my favorite way to disconnect from screens and reconnect with nature.",
      gif: 'https://media.giphy.com/media/26uf4r3EldfX5Ykqk/giphy.gif',
    },
    {
      icon: Heart,
      title: 'Nature',
      description: "From watching sunsets to stargazing, I find peace in nature's beauty. It reminds me there's a whole world beyond code and screens!",
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2t5cGNhZWx6MXB5bnRxZ2ttbzVwOXAwZW95dGRqNGRsMXB6Y2N4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlQXlQ3nHyLMvte/giphy.gif',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: "Capturing moments, landscapes, and the perfect lighting is my creative outlet. Every photo tells a story!",
      gif: 'https://media.giphy.com/media/3o7TKPATxjC1zKNLW0/giphy.gif',
    },
    {
      icon: Film,
      title: 'Movies',
      description: "From sci-fi thrillers to rom-coms, I love getting lost in a good story. Bonus points for movies with great soundtracks!",
      gif: 'https://media.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.gif',
    },
    {
      icon: Heart,
      title: 'Cats',
      description: "Cats are my spirit animal! Independent, curious, and perfectly content to nap in a sunbeam. What's not to love? 🐱",
      gif: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    },
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-accent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            Things I Love ✨
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Life isn't just about code! Here are some things that make me, well... me!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 hover-sound"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={interest.gif}
                    alt={interest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Fun cat fact at the bottom */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-primary/10 rounded-xl border-2 border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-lg">🐱</span> Fun fact: I firmly believe that all problems can be solved with a good cup of coffee, 
              a cute cat GIF, and some solid debugging skills!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
