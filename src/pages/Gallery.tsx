import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Gallery from "@/components/portfolio/Gallery";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Gallery />
      </main>
    </div>
  );
};

export default GalleryPage;