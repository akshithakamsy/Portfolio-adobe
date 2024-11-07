import React, { useState, useEffect } from 'react';
import ProfileImage from './assets/ak.jpeg'; // Adjust the path if necessary
import { 
  BarChart, 
  GraduationCap, 
  Target,
  Heart,
  Star,
  ChevronRight,
  Users,
  Lightbulb,
  Trophy,
  Building,
  Mail,
  MapPin
} from 'lucide-react';

const AnimatedElement = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ease-out ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      {children}
    </div>
  );
};

const Section = ({ children, delay = 0 }) => (
  <AnimatedElement delay={delay}>
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
      {children}
    </div>
  </AnimatedElement>
);

const ContentCard = ({ icon: Icon, title, content, highlight, delay }) => (
  <Section delay={delay}>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-red-100 rounded-lg">
        <Icon className="w-6 h-6 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-4">
      {content.map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.heading}</h3>
          <ul className="space-y-2">
            {item.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <Star className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {highlight && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 font-medium">{highlight}</p>
        </div>
      )}
    </div>
  </Section>
);

const Presentation = () => {
  const sections = [
    {
      icon: Heart,
      title: "Passion for People Analytics",
      content: [
        {
          heading: "Why This Role Excites Me",
          points: [
            "Perfect blend of my ML expertise and interest in organizational dynamics",
            "Opportunity to impact employee experiences through data insights",
            "Chance to apply my visualization skills to workforce analytics",
            "Platform to drive data-driven HR decisions"
          ]
        },
        {
          heading: "Ready to Contribute",
          points: [
            "Strong foundation in statistical analysis and ML modeling",
            "Experience in creating actionable dashboards at Magellan Health",
            "Track record of stakeholder collaboration at Globe Life",
            "Proven ability to deliver data-driven insights"
          ]
        }
      ],
      highlight: "Eager to leverage my technical expertise to enhance Adobe's people-focused initiatives",
      delay: 200
    },
    {
      icon: GraduationCap,
      title: "Educational Journey",
      content: [
        {
          heading: "Northeastern University",
          points: [
            "MS in Management Information Systems (GPA: 3.6)",
            "Expected Graduation: May 2024",
            "Business Intelligence and Analytics Focus",
            "Advanced Statistical Analysis Training"
          ]
        },
        {
          heading: "Key Projects",
          points: [
            "Load Forecasting: Improved accuracy from 7% to 3.12%",
            "Machine Learning Models: 88% accuracy achieved",
            "Market Basket Analysis using Python and SQL",
            "Data Visualization using Tableau and Power BI"
          ]
        }
      ],
      delay: 400
    },
    {
      icon: Trophy,
      title: "Professional Experience",
      content: [
        {
          heading: "Magellan Health Analytics",
          points: [
            "Created interactive Tableau dashboards for business insights",
            "Optimized SQL queries for efficient reporting",
            "Collaborated with multiple business teams",
            "Implemented data visualization best practices"
          ]
        },
        {
          heading: "Globe Life Data Analytics",
          points: [
            "Led data visualization initiatives",
            "Developed automated reporting solutions",
            "Provided data-driven recommendations",
            "Enhanced business process efficiency"
          ]
        }
      ],
      highlight: "Proven track record of delivering impactful analytical solutions",
      delay: 600
    },
    {
      icon: Target,
      title: "Technical Skills",
      content: [
        {
          heading: "Data Analysis & Visualization",
          points: [
            "Python (scikit-learn, Pandas, NumPy, Seaborn)",
            "SQL (MySQL, PostgreSQL, MS SQL Server)",
            "Tableau & Power BI",
            "Advanced Excel & Statistical Analysis"
          ]
        },
        {
          heading: "Machine Learning",
          points: [
            "Predictive Modeling & Time Series Analysis",
            "Classification & Clustering",
            "Neural Networks & ARIMA",
            "A/B Testing & Hypothesis Testing"
          ]
        }
      ],
      delay: 800
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
      <AnimatedElement delay={0}>
        <div className="bg-gradient-to-r from-red-500 to-blue-600 rounded-xl shadow-lg overflow-hidden">
          <div className="p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={ProfileImage}
                    alt="Akshitha Kamshetty"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Akshitha Kamshetty
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Data Analyst | MS Management Information Systems
            </p>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white">Boston, MA</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-white">kamshetty.a@northeastern.edu</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-3xl font-bold text-white">88%</div>
                <div className="text-sm text-gray-100">ML Model Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-3xl font-bold text-white">3.6</div>
                <div className="text-sm text-gray-100">GPA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-3xl font-bold text-white">6%</div>
                <div className="text-sm text-gray-100">Error Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
      
      {sections.map((section, index) => (
        <ContentCard key={index} {...section} />
      ))}
    </div>
  );
};

export default Presentation;