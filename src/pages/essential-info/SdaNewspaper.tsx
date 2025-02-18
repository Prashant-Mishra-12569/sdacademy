import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const newspapers = [
  "/Newspapers/news 1 sd.jpeg",
  "/Newspapers/news 2 sd.jpeg",
  "/Newspapers/news 3 sd.jpeg",
  "/Newspapers/news 4 sd.jpeg",
  "/Newspapers/news 5 sd.jpeg",
  "/Newspapers/news 6 sd.jpeg",
  "/Newspapers/news 7 sd.jpeg"
];

export default function SdaNewspaper() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev === 0 ? newspapers.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev === newspapers.length - 1 ? 0 : prev + 1) : null
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-sdblue mb-8 text-center">
            S.D. Academy in News
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newspapers.map((newspaper, index) => (
              <div
                key={index}
                className="group transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3]">
                  <img
                    src={newspaper}
                    alt={`S.D. Academy Newspaper Article ${index + 1}`}
                    className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Full Article
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          <Dialog 
            open={selectedImage !== null} 
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black/95">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 text-white hover:bg-white/20"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 text-white hover:bg-white/20"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Full-size image */}
                {selectedImage !== null && (
                  <img
                    src={newspapers[selectedImage]}
                    alt={`S.D. Academy Newspaper Article ${selectedImage + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Bottom Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Making Headlines in Education Excellence
            </h2>
            <p className="text-lg text-blue-50 max-w-2xl mx-auto">
              S.D. Academy continues to be recognized for its outstanding 
              contributions to education and student development.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 