import React from 'react';
import profileImage from 'figma:asset/9c2db085165f38ba88d641e23748aec07d9cb02d.png';
import gradImage1 from 'figma:asset/f7b9e7f3ccf3b8391d4b10fb39e8c36dad378a1c.png';
import gradImage2 from 'figma:asset/9d213150c6c7fa0a0005e5778517109988416e3a.png';
import casualImage1 from 'figma:asset/4bdeb0263ebcf210e240aa6eb5b05bb17b52b522.png';
import casualImage2 from 'figma:asset/7bc8f658783f843562c90f3ef98c7c970939abdd.png';
import outdoorImage from 'figma:asset/ed7ac0117f9c9ebb1bbb43e1388f3891829fd351.png';
import braidsImage from 'figma:asset/03bf4021c104356baae95af0255daf3aed51aae7.png';
// Removed logo image from the gallery
// import logoImage from 'figma:asset/efd236e6ba8b3479d386da7d5e77a30d7ca8f85f.png';

const galleryImages = [
  {
    src: profileImage,
    alt: 'Diana - At Work',
    type: 'portrait',
  },
  {
    src: braidsImage,
    alt: 'Braided Beauty - Work Mode 💻',
    type: 'portrait',
  },
  {
    src: casualImage2,
    alt: 'Diana - Cafe Vibes ☕',
    type: 'portrait',
  },
  {
    src: gradImage1,
    alt: 'Graduation Day - Moringa School 🎓',
    type: 'portrait',
  },
  {
    src: outdoorImage,
    alt: 'Adventure Mode 🌿',
    type: 'portrait',
  },
  {
    src: gradImage2,
    alt: 'Graduation Celebration 🎉',
    type: 'portrait',
  },
  {
    src: casualImage1,
    alt: 'Coding From Anywhere 💻',
    type: 'portrait',
  },
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl text-center mb-6">Photo Gallery</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A glimpse into my professional journey and milestones ✨
        </p>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover-sound`}
              >
                <div className={`relative ${image.type === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'} overflow-hidden`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Pink border overlay */}
                  <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-2xl" />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
