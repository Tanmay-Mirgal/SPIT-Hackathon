import React from 'react';
import { ChevronRight, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalLanding = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-gray-300"></div>
              <p className="text-sm text-gray-600">WE PROVIDE A</p>
              <div className="h-0.5 w-12 bg-gray-300"></div>
            </div>
            <p className="text-sm text-gray-600 mb-8">COMPREHENSIVE MEDICAL SERVICES TO MEET ALL YOUR HEALTHCARE NEEDS.</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-4">
                <img src="https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?rs=1&pid=ImgDetMain" alt="User 1" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?rs=1&pid=ImgDetMain" alt="User 2" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?rs=1&pid=ImgDetMain" alt="User 3" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <div>
                <span className="text-xl font-bold">125</span>
                <span className="text-sm text-gray-500">k+</span>
                <span className="text-sm text-gray-500 ml-2">TRUSTED USER</span>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-8">
              Trusted Specialist<br />
              for Every <span className="text-[#818a60ff]">Medical</span><br />
              Need
            </h1>

            <div className="flex gap-4">
              <Link to='/schedule'><button className="flex items-center gap-2 px-6 py-3 bg-[#e3ff7dff] text-black rounded-full">
                <Calendar className="w-5 h-5" />
                Schedule an Appointment
              </button></Link>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <img 
                src="https://th.bing.com/th/id/OIP.LoqQ15EiLvHxNJVj_k8mXgHaHa?rs=1&pid=ImgDetMain" 
                alt="Doctor reviewing records"
                className="w-full rounded-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -left-6 top-12 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-pink-400 rounded-lg"></div>
                  </div>
                  <div>
                    <p className="font-medium">Orthopedics</p>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img src="https://th.bing.com/th/id/OIP.wbZBGL1zXorjfgj5GLWnmwHaLH?rs=1&pid=ImgDetMain" alt="Doctor 1" className="w-6 h-6 rounded-full" />
                        <img src="https://th.bing.com/th/id/OIP.IVwf85npYYUcwRp4EIhqDgHaJm?rs=1&pid=ImgDetMain" alt="Doctor 2" className="w-6 h-6 rounded-full" />
                        <img src="https://media.istockphoto.com/id/542947644/photo/handsome-medical-doctor.jpg?s=170667a&w=0&k=20&c=sQ19wL8ETdD7BtzVBez_KmlQ2_4fq_7y10W_oIW6nKk=" alt="Doctor 3" className="w-6 h-6 rounded-full" />
                      </div>
                      <span className="text-sm text-gray-500">+2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-32 bg-white p-4 rounded-2xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?rs=1&pid=ImgDetMain" 
                    alt="Alex Milna"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-medium">What's New About<br />Extraordinary Medical Services</p>
                    <p className="text-sm text-gray-500 mt-1">Alex Milna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
       

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 my-16">
          {[ 
            ['30M+', 'Global Users'],
            ['30%', 'USER Savings rate'],
            ['$100M', 'Capital raised'],
            ['60+', 'Team Members']
          ].map(([value, label], index) => (
            <div key={index}>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "One-to-One Video Call with Doctor", description: "Connect with doctors instantly via video calls.", icon: "video" },
              { title: "AI Chatbot for Health Guidance", description: "Get personalized diet plans and exercise recommendations.", icon: "message-circle" },
              { title: "24-Hour Support", description: "Round-the-clock assistance for any health concerns.", icon: "clock" },
              { title: "User-Friendly Dashboard", description: "Track your progress, exercises, and diet plans.", icon: "bar-chart" },
              { title: "Multilingual Platform", description: "Supports multiple languages for a global user base.", icon: "globe" },
              { title: "Doctor Prescriptions", description: "Doctors can provide prescriptions for your treatment.", icon: "file" },
              { title: "Expert Doctor Connections", description: "Get connected with highly skilled medical professionals.", icon: "user-check" },
              { title: "Mobile App for Portable Use", description: "Access your medical information on the go.", icon: "smartphone" },
              { title: "Live Chat with Doctors and Community", description: "Chat with doctors and people with similar health concerns.", icon: "message-square" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#e3ff7dff] text-black rounded-full flex items-center justify-center">
                    <i className={`lucide lucide-${feature.icon} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Insight Card */}
          <div className="bg-white p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#e3ff7dff] text-black px-4 py-1 rounded-full text-sm">INSIGHT</span>
              <span className="text-sm text-gray-500">30/11/2024</span>
            </div>
            <p className="text-xl font-medium mb-4">We are here to<br />support your health</p>
            <button className="flex items-center gap-2 text-sm font-medium">
              Learn More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Team Card */}
          <div className="bg-white p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">
              Our team of highly trained <span className="text-[#818a60ff]">medical</span> professionals is here to provide the best possible care.
            </h2>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#e3ff7dff] text-black rounded-full">
              LEARN MORE
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalLanding;
