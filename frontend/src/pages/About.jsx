import React from 'react';
import { assets } from '../assets/assets';
import { Clock, Heart, Activity, Check, Users, Hospital } from 'lucide-react';
import PopupWidget from './PopupWidget'
import OurTeam from '../components/OurTeam';
const About = () => {
  const stats = [
    { number: "10K+", text: "Active Users" },
    { number: "150+", text: "Sessions" },
    { number: "10+", text: "Countries" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 pt-20">
      {/* Hero Section with Stats */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-blue-600">HapScale</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        At HapScale, we believe that happiness in life and workplace leads to outstanding results. Here's how we make it happen
        </p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section with Image */}
      <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
          <img 
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]" 
            src={assets.about_image} 
            alt="Healthcare professionals" 
          />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Is your Enterprise happy ?
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
          At HapScale,  our mission is to upscale organizations to gain maximum output by fostering a culture of happiness and well-being among it's employees. Through our unique product, analysis, innovative strategies and enterprise customised solutions, we empower organizations to create a culture where their employees find blissfulness and fulfillment in their work, leading to happier and more productive teams within organisations.
          </p>

          {/* Key Features */}
          <div className="space-y-4">
            {[
              "Boosts Employee Well-being",
              " Data-Driven Insights for Organizational Growth",
              "Customized Solutions for Maximum Impact",
              " Reduces Burnout of Teams"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
            Our mission at Hapscale is to scale up organizations measure, optimize, and scale their employees well-being. Ready to experience the power of happiness in your workplace? Lets get started.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="text-blue-600">HapScale</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our workplace happiness strategies enhance employee motivation leading to superior organizational results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Enhanced Productivity",
              description: "Using our product HAPSCALE , we can make your enterprise employees feel motivated and focused. Happy employees are more engaged , leading to higher productivity and better performance across teams."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "More Retentions",
              description: "By implementing services we help enterprises to create a supportive workplace culture where employees feel valued and satisfied and hence retention rates of employees goes up. "
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Employee Satisfaction",
              description: "By implementing our enterprise customized initiatives we  improve work motivation , reduce stress and improve overall well-being of employees. "
            }
          ].map((feature, index) => (
            <div key={index} 
                 className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <PopupWidget />
      <OurTeam/>

    </div>
  );
};

export default About;