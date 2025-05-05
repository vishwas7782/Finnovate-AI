import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
        Hi, I'm <strong>Vishwasjeet Kumar Gupta</strong>, the creator of Finnovate AI — a smart financial assistant designed to help individuals and businesses manage money more intelligently. 
        With a passion for clean UI, powerful analytics, and user-first design, I built this app to empower people to take control of their finances with AI-powered insights.
      </p>

      <div className="mt-8 text-gray-600">
        <p><strong>College:</strong> Jai Narain College of Technology</p>
        <p><strong>Branch:</strong> Computer Science and Engineering</p>
        <p><strong>Special Interests:</strong> AI, Fintech, Startups</p>
      </div>
    </div>
  );
};

export default About;
