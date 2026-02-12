import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GROUPS } from '../constants';
import { GroupProfile } from '../types';

const GroupProfiles: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const location = useLocation();

  useEffect(() => {
    // Check if URL has hash for shepherd
    if (location.hash === '#shepherd') {
      const element = document.getElementById('shepherd-resources');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const categories = ['All', 'Young Adults', 'Families', 'Seniors', 'General'];

  const filteredGroups = filter === 'All'
    ? GROUPS
    : GROUPS.filter(g => g.category === filter);

  const scrollToGroups = () => {
    document.getElementById('group-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Exact Replica of carmel.sg/connect/care-group/ */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Care Groups Gathering" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-script text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Care Groups
          </h1>
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto">
            Praying, sharing, caring for each other and living out our faith together.
          </p>
          <div className="mt-10">
            <button 
                onClick={scrollToGroups}
                className="bg-carmel-red text-white font-bold py-3 px-8 rounded uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg"
            >
                Join a Care Group
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Find Your Community</h2>
          <div className="w-16 h-1 bg-carmel-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            We were not meant to walk this journey of faith alone. Our Care Groups provide a place for you to belong, grow, and serve. With groups meeting across Singapore on various days, there is a place for you.
          </p>
        </div>

        {/* Filters */}
        <div id="group-list" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all uppercase ${
                filter === cat
                  ? 'bg-carmel-red text-white shadow-md transform scale-105'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300 mb-20">
            <p className="text-gray-500">No groups found in this category.</p>
            <button 
                onClick={() => setFilter('All')} 
                className="mt-4 text-carmel-red font-medium hover:underline"
            >
                View all groups
            </button>
          </div>
        )}

        {/* Shepherd Resources Section */}
        <div id="shepherd-resources" className="bg-gray-50 rounded-2xl p-10 md:p-16 text-center border border-gray-100 mb-16">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-carmel-red">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
             </div>
             <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">House Group Shepherd</h3>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                 Are you a leader or shepherd of a Care Group? Access resources, training materials, and pastoral updates here.
             </p>
             <Link to="/shepherd" className="inline-block bg-white text-carmel-red border-2 border-carmel-red hover:bg-carmel-red hover:text-white px-8 py-3 rounded font-bold transition-colors uppercase text-sm tracking-wide">
                 Access Shepherd Resources
             </Link>
        </div>

        {/* Starting a Group Section */}
        <div className="bg-carmel-red rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-4">Interested in starting a group?</h3>
                <p className="text-red-100 max-w-2xl mx-auto mb-8 text-lg">
                    We are always looking for new leaders to shepherd our flock. If you feel called to lead or host a group, we would love to speak with you.
                </p>
                <a href="mailto:pastor@carmel.sg" className="inline-block bg-white text-carmel-red px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide shadow-lg">
                    Contact Pastor
                </a>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotPattern)" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  );
};

const GroupCard: React.FC<{ group: GroupProfile }> = ({ group }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
        <img
          src={group.image}
          alt={group.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-carmel-red px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider rounded-bl-lg">
          {group.category}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-carmel-red transition-colors">{group.name}</h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
          {group.description}
        </p>

        <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 text-carmel-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{group.meetingTime}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 text-carmel-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{group.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 text-carmel-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Led by {group.leaderName}</span>
          </div>
        </div>

        <div className="mt-6 pt-4">
          <a
            href={`mailto:${group.leaderContact}`}
            className="flex items-center justify-center w-full px-4 py-2 bg-gray-50 text-gray-800 rounded border border-gray-200 text-xs font-bold uppercase tracking-wider hover:bg-carmel-red hover:text-white hover:border-carmel-red transition-all"
          >
            Contact Leader
          </a>
        </div>
      </div>
    </div>
  );
};

export default GroupProfiles;