import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Teacher {
  id: number;
  name: string;
  image: string;
}

export const TEACHERS_DATA = [
  {
    id: 1,
    name: "Madhav Tripathi",
    image: "/Teachers/Madhav Tripathi.jpeg"
  },
  {
    id: 2,
    name: "JP Shukla",
    image: "/Teachers/JP Shukla.jpeg"
  },
  {
    id: 3,
    name: "Abid Ali",
    image: "/Teachers/Abid Ali.jpeg"
  },
  {
    id: 4,
    name: "KM Pandey",
    image: "/Teachers/KN Pandey.jpeg"
  },
  {
    id: 5,
    name: "Mamta Tiwari",
    image: "/Teachers/Mamta Tiwari.jpg"
  },
  {
    id: 6,
    name: "Ashok Nigam",
    image: "/Teachers/Nigam.jpg"
  },
  {
    id: 7,
    name: "Naveen Chaurasia",
    image: "/Teachers/Naveen Chaurasia.jpeg"
  }
];

export const TeachersSection = () => {
  const navigate = useNavigate();
  const [teachers] = useState<Teacher[]>(TEACHERS_DATA);

  // Create three sets for seamless infinite scroll
  const displayTeachers = [...teachers, ...teachers, ...teachers];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
        Our Expert Teachers
      </h2>
      
      <div className="teachers-scroll-container">
        <div className="teachers-scroll">
          {displayTeachers.map((teacher, index) => (
            <div
              key={`${teacher.id}-${index}`}
              className="flex-none w-[250px] md:w-[250px] px-3 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/teachers')}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 hover:shadow-xl">
                <div className="relative w-36 h-36 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-full animate-pulse"></div>
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-center"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {teacher.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button
          onClick={() => navigate('/teachers')}
          className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white px-8 py-3 text-lg rounded-full hover:opacity-90 transform transition-all duration-300 hover:scale-105 shadow-lg"
        >
          View All Teachers
        </Button>
      </div>
    </section>
  );
};
