import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Replicating Care Group Look & Feel for Landing Page */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Church Community"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-script text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Welcome Home
          </h1>
          <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8">
            Growing deeper in faith and community at Mount Carmel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/groups" className="px-8 py-3 bg-carmel-red text-white font-bold uppercase tracking-wide rounded hover:bg-red-700 transition-colors">
                Join a Care Group
             </Link>
             <Link to="/discipleship" className="px-8 py-3 bg-white text-carmel-red font-bold uppercase tracking-wide rounded hover:bg-gray-100 transition-colors">
                Discipleship Pathway
             </Link>
          </div>
        </div>
      </div>

      {/* Discipleship Segment */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-sm font-bold text-carmel-red tracking-widest uppercase mb-2">Growth</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Discipleship Pathway</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Our goal is to present everyone mature in Christ. The Discipleship Pathway is designed to help you identify where you are in your spiritual journey and take the next step.
                    </p>
                    <Link to="/discipleship" className="inline-flex items-center text-carmel-red font-bold uppercase tracking-wide border-b-2 border-carmel-red pb-1 hover:text-red-800 hover:border-red-800 transition-colors">
                        View The Pathway
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
                <div className="md:w-1/2 relative">
                     <div className="absolute top-4 -left-4 w-full h-full bg-red-50 rounded-lg -z-10"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Discipleship Group" 
                        className="rounded-lg shadow-xl w-full"
                     />
                </div>
            </div>
        </div>
      </div>

      {/* Sermon Discussion Segment */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-carmel-red tracking-widest uppercase mb-2">Resources</h2>
                <h3 className="text-3xl font-serif font-bold text-gray-900">Sermon Discussion Guides</h3>
                <div className="w-16 h-1 bg-carmel-red mx-auto mt-6"></div>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Dive deeper into the Sunday message with your small group or personal study.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Public Discussion Guide */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-carmel-red">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Sermon Discussion Guide</h4>
                    <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                        Access the questions and study notes for this week's sermon. Open to everyone.
                    </p>
                    <Link to="/discussion-guide" className="w-full py-3 border-2 border-carmel-red text-carmel-red font-bold rounded hover:bg-carmel-red hover:text-white transition-colors uppercase text-sm tracking-wide">
                        Download Guide
                    </Link>
                </div>

                {/* Facilitator Guide */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-600">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Facilitator Guide</h4>
                    <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                        Additional resources, tips, and icebreakers for group leaders. Password required.
                    </p>
                    <Link to="/facilitator" className="w-full py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-colors uppercase text-sm tracking-wide">
                        Facilitator Access
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;