import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function SchoolUniform() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sdblue mb-8">School Uniform</h1>
          
          {/* Hero Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/uniform.jpg"
              alt="SD Academy School Uniform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-sdblue mb-4">Uniform Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Boys Uniform</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>White shirt with school logo</li>
                  <li>Navy blue trousers</li>
                  <li>School tie with house colors</li>
                  <li>Black shoes with white socks</li>
                  <li>Navy blue blazer (winter)</li>
                  <li>School sweater (winter)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Girls Uniform</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>White shirt/blouse with school logo</li>
                  <li>Navy blue skirt/trousers</li>
                  <li>School tie with house colors</li>
                  <li>Black shoes with white socks</li>
                  <li>Navy blue blazer (winter)</li>
                  <li>School sweater (winter)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Additional Guidelines</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proper grooming and neat appearance is mandatory</li>
                <li>Hair should be neatly combed and properly maintained</li>
                <li>Jewelry and accessories are not permitted</li>
                <li>PE uniform is required on sports days</li>
                <li>ID cards must be worn at all times</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Important Note</h3>
              <p>
                All uniform items can be purchased from the school's authorized uniform vendor. 
                For any queries regarding the school uniform, please contact the school office.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 