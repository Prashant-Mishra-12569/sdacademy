import { useState } from 'react';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    title: 'Founder',
    name: 'Dr. HN Singh',
    message: 'Our vision is to create a learning environment that inspires innovation and leadership.',
    image: '/Founder.jpeg'
  },
  {
    title: 'Principal',
    name: 'Mrs. Shruti Singh',
    message: 'At S.D. Academy, we believe in nurturing not just academic excellence, but character and creativity.',
    image: '/Principal.jpeg'
  },
  {
    title: 'Director',
    name: 'Mr. Rajesh Singh',
    message: 'Ensuring smooth operations and maintaining high standards in all aspects of our institution.',
    image: '/Director.jpeg'
  }
];

export const LeadershipCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
          Our Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transform transition-all duration-500 hover:shadow-2xl
                ${activeCard === index ? 'scale-105' : 'scale-100'}
                bg-gradient-to-br from-white to-[#F1F0FB] backdrop-blur-sm animate-float`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#8B5CF6] shadow-lg transform transition-transform duration-500 hover:rotate-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ 
                        objectPosition: 'center top',
                        aspectRatio: '1/1'
                      }}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
                    {leader.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-[#0EA5E9]">{leader.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{leader.message}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
