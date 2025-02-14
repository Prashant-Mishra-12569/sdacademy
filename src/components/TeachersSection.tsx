import { useState } from 'react';

interface Teacher {
  id: number;
  name: string;
  image: string;
}

export const TeachersSection = () => {
  const [teachers] = useState<Teacher[]>([
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
      name: "KN Pandey",
      image: "/Teachers/KN Pandey.jpeg"
    },
    {
      id: 5,
      name: "Mamta Tiwari",
      image: "/Teachers/Mamta Tiwari.jpg"
    },
    {
      id: 6,
      name: "Nigam",
      image: "/Teachers/Nigam.jpg"
    }
  ]);

  // Double the array for seamless infinite scroll only if more than 3 teachers
  const shouldSlide = teachers.length > 3;
  const displayTeachers = shouldSlide ? [...teachers, ...teachers] : teachers;

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
        Our Expert Teachers
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className={`flex justify-center ${shouldSlide ? 'animate-slideLeft gap-16' : 'gap-8'}`}>
          {displayTeachers.map((teacher, index) => (
            <div 
              key={`${teacher.id}-${index}`}
              className="flex-none w-72 md:w-80 px-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-full animate-pulse"></div>
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {teacher.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
