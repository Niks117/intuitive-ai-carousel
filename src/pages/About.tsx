
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About AI Toolbox Pro</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            AI Toolbox Pro is a comprehensive platform dedicated to helping you discover, 
            explore, and use the best AI tools and resources available.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            In today's rapidly evolving AI landscape, staying informed about the latest 
            tools and technologies can be challenging. Our mission is to provide a 
            curated, user-friendly platform that helps professionals, developers, 
            researchers, and businesses find the perfect AI tools for their specific needs.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Comprehensive Directory:</strong> A carefully curated collection of 
              AI tools across multiple categories, from machine learning frameworks to 
              generative AI applications.
            </li>
            <li>
              <strong>Detailed Information:</strong> Each tool listing includes essential 
              details such as features, use cases, pricing, and documentation links.
            </li>
            <li>
              <strong>Powerful Search:</strong> Find exactly what you need with our 
              advanced search and filtering capabilities.
            </li>
            <li>
              <strong>Personalized Experience:</strong> Create an account to save your 
              favorite tools and receive tailored recommendations.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Curation Process</h2>
          <p>
            We carefully evaluate each AI tool before adding it to our platform, 
            considering factors such as:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Functionality and performance</li>
            <li>User experience and interface</li>
            <li>Documentation and support resources</li>
            <li>Community adoption and feedback</li>
            <li>Regular updates and maintenance</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
          <p>
            AI Toolbox Pro is more than just a directory—it's a community of AI 
            enthusiasts, professionals, and researchers. We're constantly updating our 
            platform with new tools and features based on user feedback and industry 
            developments.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg">
                Create an Account
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="lg">
                Explore AI Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
