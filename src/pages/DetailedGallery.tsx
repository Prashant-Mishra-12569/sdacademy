import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Footer } from "@/components/Footer";

// Import all image arrays
import { 
  images as campusImages,
  gkpMahotsavImages,
  christmasImages,
  sportsImages,
  diwaliImages,
  yogaImages,
  celebrationsImages 
} from '@/data/gallery-images';

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export default function DetailedGallery() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    (location.state as any)?.initialCategory || 'All'
  );
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Create a mapping of categories to their respective image arrays
  const categoryImages = {
    'Campus': campusImages,
    'GKP Mahotsav': gkpMahotsavImages,
    'Christmas': christmasImages,
    'Sports': sportsImages,
    'Diwali': diwaliImages,
    'Yoga': yogaImages,
    'Celebrations': celebrationsImages
  };

  // Combine all images for the "All" category
  const allImages = Object.values(categoryImages).flat();

  // Get the correct images based on selected category
  const displayImages = selectedCategory === 'All' 
    ? allImages 
    : categoryImages[selectedCategory] || [];

  const categories = ['All', ...Object.keys(categoryImages)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-white/80 border-gray-300"
          >
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 font-montserrat mb-2">
              School Gallery
            </h1>
            <p className="text-gray-600 font-lato">
              Capturing moments and memories from our school events
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 bg-white p-4 rounded-xl shadow-sm">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`
                font-montserrat text-sm rounded-full px-6 transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-base font-semibold font-montserrat">{image.caption}</p>
                  <p className="text-sm opacity-90 mt-1 font-lato">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-black/95 border-none p-0">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="w-full max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white bg-black/70 p-6 backdrop-blur-sm">
                  <p className="text-xl font-semibold font-montserrat mb-1">
                    {selectedImage.caption}
                  </p>
                  <p className="text-base opacity-90 font-lato">
                    {selectedImage.category}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {displayImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-lato text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
