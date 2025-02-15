import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Book, Clock, Users, Award, AlertTriangle } from "lucide-react";

export default function CodeOfConduct() {
  const conductRules = [
    {
      category: "Academic Conduct",
      icon: Book,
      rules: [
        "Regular attendance is mandatory",
        "Complete all assignments on time",
        "Maintain academic honesty",
        "Participate actively in class"
      ]
    },
    {
      category: "Discipline",
      icon: Shield,
      rules: [
        "Wear proper school uniform",
        "Maintain punctuality",
        "Follow classroom etiquette",
        "Respect school property"
      ]
    },
    {
      category: "Social Behavior",
      icon: Users,
      rules: [
        "Respect teachers and peers",
        "No bullying or harassment",
        "Maintain cleanliness",
        "Practice good manners"
      ]
    },
    {
      category: "General Rules",
      icon: AlertTriangle,
      rules: [
        "No mobile phones in school",
        "Follow safety guidelines",
        "Report any issues to teachers",
        "Maintain discipline in common areas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sdblue mb-8">Code of Conduct</h1>
          
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXN8ZW58MHx8MHx8fDA%3D"
              alt="Code of Conduct"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Student Guidelines</h2>
              <p className="text-gray-200">Building character through discipline</p>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {conductRules.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-600 mt-1">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Consequences Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-red-600" />
              Disciplinary Actions
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Violation of the code of conduct may result in the following actions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Verbal warning</li>
                <li>Written warning to parents</li>
                <li>Parent-teacher meeting</li>
                <li>Detention or suspension</li>
                <li>Other disciplinary measures as deemed necessary</li>
              </ul>
            </div>
          </div>

          {/* Additional Guidelines */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Important Note</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• The school reserves the right to modify these rules as needed</li>
              <li>• Parents are requested to cooperate in maintaining discipline</li>
              <li>• Regular monitoring of student behavior will be conducted</li>
              <li>• Positive behavior will be recognized and rewarded</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 