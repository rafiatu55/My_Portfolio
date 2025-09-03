import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getGalleryImages, GalleryItem } from "@/lib/galleryUtils";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGalleryImages = async () => {
      const images = await getGalleryImages();
      setGalleryItems(images);
      setLoading(false);
    };
    loadGalleryImages();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work, projects, and achievements
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;