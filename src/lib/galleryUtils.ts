export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const imageFiles = [
  'image1.jpg',
  'image2.png', 
  'image3.jpg',
  'image4.png',
  'image5.jpg',
  'image6.png'
];

export const getGalleryImages = async (): Promise<GalleryItem[]> => {
  const validImages: GalleryItem[] = [];
  
  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i];
    try {
      const response = await fetch(`/gallery/${filename}`, { method: 'HEAD' });
      if (response.ok) {
        validImages.push({
          id: i + 1,
          title: `Gallery Image ${i + 1}`,
          image: `/gallery/${filename}`,
          category: "Portfolio"
        });
      }
    } catch (error) {
      // Skip invalid images
    }
  }
  
  // Fallback if no images found
  if (validImages.length === 0) {
    return [
      { id: 1, title: "Project Screenshot 1", image: "/placeholder.svg", category: "Web Development" },
      { id: 2, title: "Project Screenshot 2", image: "/placeholder.svg", category: "Testing" },
      { id: 3, title: "Project Screenshot 3", image: "/placeholder.svg", category: "QA" }
    ];
  }
  
  return validImages;
};