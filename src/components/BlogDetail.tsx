import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { blogPosts } from '../data/blogData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogDetailProps {
  postId: string;
  onClose: () => void;
}

export function BlogDetail({ postId, onClose }: BlogDetailProps) {
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md">
      <div className="min-h-screen px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex justify-end mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-accent"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Title & Meta */}
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8 bg-card p-8 rounded-2xl shadow-lg">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="text-lg mb-4">
                    <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                  </p>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n');
                return (
                  <ol key={index} className="list-decimal list-inside mb-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {item.replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="bg-accent p-6 rounded-2xl mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-primary" />
              <h3 className="text-lg">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 hover:bg-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={onClose}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
