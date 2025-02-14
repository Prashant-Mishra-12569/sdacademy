import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  {
    url: './School Building.jpeg',
    caption: 'School Building',
    category: 'Campus'
  }
];

// Add GKP Mahotsav images
const gkpMahotsavImages = [
  {
    url: '/GKPMahotsav/Image1.jpeg',
    caption: 'GKP Mahotsav Cultural Program',
    category: 'GKP Mahotsav'
  },
  {
    url: '/GKPMahotsav/Image2.jpeg',
    caption: 'GKP Mahotsav Celebration',
    category: 'GKP Mahotsav'
  }
];

// Add Christmas images
const christmasImages = [
  {
    url: '/Christmas/Christmas1.jpeg',
    caption: 'Christmas Celebration',
    category: 'Christmas'
  },
  {
    url: '/Christmas/Christmas2.jpeg',
    caption: 'Christmas Event',
    category: 'Christmas'
  }
];

// Add Sports images
const sportsImages = [
  {
    url: '/Sports/Sports1.jpeg',
    caption: 'Sports Day Celebration',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports2.jpeg',
    caption: 'Annual Sports Meet',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports3.jpeg',
    caption: 'Sports Activities',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports4.jpeg',
    caption: 'Sports Competition',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports5.jpeg',
    caption: 'Sports Achievement',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports6.jpeg',
    caption: 'Sports Event',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports7.jpeg',
    caption: 'Sports Program',
    category: 'Sports'
  }
];

// Add Diwali images
const diwaliImages = [
  {
    url: '/Diwali/Diwali1.jpeg',
    caption: 'Diwali Celebration',
    category: 'Diwali'
  }
];

// Add Yoga images
const yogaImages = [
  {
    url: '/Yoga/Yoga1.jpeg',
    caption: 'Yoga Session',
    category: 'Yoga'
  }
];

// Add Celebrations and Programs images
const celebrationsImages = Array.from({ length: 29 }, (_, i) => ({
  url: `/Celebrations and Programs/image${i + 1}.jpg`,
  caption: `School Celebration ${i + 1}`,
  category: 'Celebrations and Programs'
}));

// Update the combined images array to include new sections
const allImages = [
  ...images, 
  ...gkpMahotsavImages, 
  ...christmasImages, 
  ...sportsImages,
  ...diwaliImages,
  ...yogaImages,
  ...celebrationsImages
];

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export const Gallery = () => {
  const navigate = useNavigate();
  
  // Combine all images for the main slider
  const allImages = [
    ...images,
    ...gkpMahotsavImages,
    ...christmasImages,
    ...sportsImages,
    ...diwaliImages,
    ...yogaImages,
    ...celebrationsImages
  ];

  // Group images by category
  const categories = {
    'Campus': images,
    'GKP Mahotsav': gkpMahotsavImages,
    'Christmas': christmasImages,
    'Sports': sportsImages,
    'Diwali': diwaliImages,
    'Yoga': yogaImages,
    'Celebrations': celebrationsImages
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          Our Gallery
        </h2>

        {/* Main Image Slider */}
        <div className="mb-20">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-lg font-medium">{image.caption}</p>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Category Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categoryImages]) => (
            <div key={category} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-sdblue mb-4">{category}</h3>
              
              {/* Preview Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {categoryImages.slice(0, 2).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Image count and View All button */}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {categoryImages.length} Photos
                </span>
                <Button
                  variant="outline"
                  onClick={() => navigate('/gallery', { 
                    state: { initialCategory: category }
                  })}
                  className="bg-white hover:bg-gray-50"
                >
                  View All
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
