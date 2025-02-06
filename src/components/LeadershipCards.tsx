
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    title: 'Principal',
    name: 'Mrs. Shruti Singh',
    message: 'At S.D. Academy, we believe in nurturing not just academic excellence, but character and creativity.',
    image: '/lovable-uploads/f14cad96-6fcf-4794-974e-fcd1f75c9701.png'
  },
  {
    title: 'Founder',
    name: 'Dr. HN Singh',
    message: 'Our vision is to create a learning environment that inspires innovation and leadership.',
    image: '/lovable-uploads/5f858153-c223-4655-ab7d-62b23245f96b.png'
  },
  {
    title: 'Director',
    name: 'Mr. S Rajesh Singh',
    message: 'We are committed to providing world-class education while maintaining our cultural values.',
    image: '/lovable-uploads/724a10ed-bec3-460a-97a4-2c88e1e94e90.png'
  }
];

export const LeadershipCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className={`p-6 cursor-pointer transform transition-all duration-500 hover:shadow-xl
                ${activeCard === index ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-sdblue">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-sdblue">{leader.title}</h3>
                <h4 className="text-lg text-gray-600">{leader.name}</h4>
                <p className="text-gray-500">{leader.message}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
