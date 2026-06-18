import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts } from '../data/blogData';
import { BlogDetail } from './BlogDetail';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Posts', emoji: '📚' },
    { id: 'tech', label: 'Tech', emoji: '💻' },
    { id: 'coding', label: 'Coding', emoji: '👨‍💻' },
    { id: 'movies', label: 'Movies', emoji: '🎬' },
    { id: 'lifestyle', label: 'Lifestyle', emoji: '✨' },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl text-center mb-6">The Blog</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tech talks, coding vibes, movie reviews, and everything in between. 
            Join me on this journey! ✨
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-accent hover:bg-accent/80'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 cursor-pointer hover-sound"
                onClick={() => setSelectedPost(post.id)}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      {categories.find(c => c.id === post.category)?.emoji} {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-2xl text-muted-foreground">
                No posts in this category yet! 📝
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <BlogDetail
          postId={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}