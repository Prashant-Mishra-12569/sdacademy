import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newspaper, Trophy, Calendar, Star, ArrowUpRight } from "lucide-react";

export default function SdaNewspaper() {
  const newsHighlights = [
    {
      title: "SD Academy Excels in District Sports Meet",
      paper: "Dainik Jagran",
      date: "15 Nov 2023",
      description: "Students win multiple medals in various sports categories",
      image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
    },
    {
      title: "Cultural Excellence at Annual Function",
      paper: "Hindustan",
      date: "20 Oct 2023",
      description: "Students showcase exceptional talent in cultural performances",
      image: "/Celebrations and Programs/image15.jpg"
    },
    {
      title: "Academic Achievement Celebration",
      paper: "Amar Ujala",
      date: "5 Sept 2023",
      description: "School celebrates outstanding board exam results",
      image: "/Celebrations and Programs/image8.jpg"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      count: "100%",
      description: "Board Results"
    },
    {
      icon: Star,
      title: "Cultural Awards",
      count: "15+",
      description: "District Level"
    },
    {
      icon: Calendar,
      title: "Media Coverage",
      count: "25+",
      description: "News Features"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sdblue mb-8">SDA in News</h1>
          
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
              alt="SDA in News"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Media Coverage</h2>
              <p className="text-gray-200">Our achievements in the spotlight</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600">{stat.count}</h3>
                <p className="text-lg font-semibold mb-1">{stat.title}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* News Articles */}
          <div className="space-y-8 mb-12">
            {newsHighlights.map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full">
                      <img 
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 text-purple-600 text-sm mb-2">
                      <Newspaper className="h-4 w-4" />
                      <span>{news.paper}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{news.description}</p>
                    <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                      Read Full Article
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Press Contact */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Press Contact</h3>
            <p className="text-gray-700 mb-4">
              For media inquiries and press releases, please contact our public relations department:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Email: press@sdacademy.com</li>
              <li>• Phone: +91 XXXXX XXXXX</li>
              <li>• Available: Monday to Friday, 9 AM - 5 PM</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 