import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { FACILITATOR_RESOURCES } from '../constants';

const FacilitatorGuide: React.FC = () => {
  return (
    <ProtectedRoute role="FACILITATOR" title="Facilitator">
      <div className="bg-white min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-carmel-red font-bold tracking-widest uppercase text-sm">Equipping</span>
                <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">Facilitator Guide</h1>
                <div className="w-20 h-1 bg-carmel-red mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Weekly Study Guides</h2>
                    <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
                        {FACILITATOR_RESOURCES.map((resource, idx) => (
                            <div key={resource.id} className={`p-6 hover:bg-red-50 transition-all cursor-pointer group ${idx !== FACILITATOR_RESOURCES.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start">
                                        <div className="bg-gray-100 p-2 rounded text-gray-500 mr-4 group-hover:bg-carmel-red group-hover:text-white transition-colors">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-carmel-red transition-colors">{resource.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{resource.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <svg className="w-5 h-5 text-gray-300 group-hover:text-carmel-red transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default FacilitatorGuide;