import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Users, MapPin, Link as LinkIcon, Building } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  company: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export function GitHubSection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile
        const profileResponse = await fetch('https://api.github.com/users/DianaGakuya');
        if (!profileResponse.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repos
        const reposResponse = await fetch('https://api.github.com/users/DianaGakuya/repos?sort=updated&per_page=6');
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !profile) {
    return (
      <section id="github" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl mb-4">GitHub Profile</h2>
            <p className="text-muted-foreground">
              Visit my GitHub: <a href="https://github.com/DianaGakuya" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@DianaGakuya</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Updated today';
    if (diffDays === 1) return 'Updated yesterday';
    if (diffDays < 7) return `Updated ${diffDays} days ago`;
    if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} weeks ago`;
    return `Updated ${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <section id="github" className="py-20 px-6 bg-accent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            <Github className="inline-block mr-3 h-10 w-10" />
            GitHub Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my open source contributions and personal projects on GitHub!
          </p>
        </div>

        {/* Profile Card */}
        <Card className="mb-12 overflow-hidden border-2 border-primary/20 hover:shadow-2xl transition-shadow">
          <div className="md:flex">
            {/* Avatar Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
              <div className="text-center">
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  className="w-48 h-48 rounded-full border-4 border-primary mx-auto mb-4 shadow-xl"
                />
                <Button
                  onClick={() => window.open(profile.html_url, '_blank')}
                  className="bg-primary hover:bg-primary/90 hover-sound"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub Profile
                </Button>
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl mb-2">{profile.name}</h3>
              <p className="text-primary mb-4">@{profile.login}</p>
              
              {profile.bio && (
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {profile.bio}
                </p>
              )}

              {/* Details */}
              <div className="space-y-3 mb-6">
                {profile.company && (
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4 text-primary" />
                    <span>{profile.company}</span>
                  </div>
                )}
                {profile.location && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{profile.location}</span>
                  </div>
                )}
                {profile.blog && (
                  <div className="flex items-center gap-2 text-sm">
                    <LinkIcon className="h-4 w-4 text-primary" />
                    <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {profile.blog}
                    </a>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl mb-1">{profile.public_repos}</div>
                  <div className="text-xs text-muted-foreground">Repositories</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl mb-1">{profile.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl mb-1">{profile.following}</div>
                  <div className="text-xs text-muted-foreground">Following</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Repositories Grid */}
        <div>
          <h3 className="text-2xl mb-8 text-center">Recent Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 cursor-pointer hover-sound"
                onClick={() => window.open(repo.html_url, '_blank')}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg group-hover:text-primary transition-colors">
                      {repo.name}
                    </h4>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {repo.description || 'No description available'}
                  </p>

                  {/* Language & Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="bg-primary/10 text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground">
                    {formatDate(repo.updated_at)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/DianaGakuya?tab=repositories', '_blank')}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-sound"
          >
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
}
