import React from 'react';
import { Link } from 'react-router-dom';

const DiscussionGuide: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <span className="text-carmel-red font-bold tracking-widest uppercase text-sm">Sunday Message</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">Sermon Discussion Guide</h1>
            <div className="w-20 h-1 bg-carmel-red mx-auto mt-6"></div>
        </div>

        {/* Current Week */}
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-carmel-red overflow-hidden mb-12">
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">This Week</span>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">The Power of Prayer</h2>
                        <p className="text-carmel-red font-medium mt-1">James 5:13-18</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="text-gray-500 text-sm">October 22, 2024</span>
                    </div>
                </div>

                <div className="prose max-w-none text-gray-600">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">Questions for Reflection:</h3>
                    <ol className="list-decimal pl-5 space-y-3">
                        <li>In verse 13, James says "Is anyone among you suffering? Let him pray." Why is prayer often our last resort rather than our first response?</li>
                        <li>What does it mean to pray "in faith" (v. 15)? How do we balance faith with God's sovereignty?</li>
                        <li>James uses Elijah as an example of a man "with a nature like ours" (v. 17). How does this encourage you in your own prayer life?</li>
                        <li>Who is someone in your life that needs prayer right now? Take time to pray for them as a group.</li>
                    </ol>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                    <button className="flex items-center text-sm font-bold text-gray-700 hover:text-carmel-red transition-colors uppercase tracking-wide">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download PDF
                    </button>
                    <Link to="/facilitator" className="flex items-center text-sm font-bold text-gray-700 hover:text-carmel-red transition-colors uppercase tracking-wide ml-auto">
                        Facilitator Notes
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </div>
        </div>

        {/* Archive */}
        <h3 className="text-xl font-bold text-gray-900 mb-6">Previous Weeks</h3>
        <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div>
                        <h4 className="font-bold text-gray-900">Walking in Wisdom</h4>
                        <p className="text-sm text-gray-500">James 3:13-18 &bull; October {15 - i * 7}, 2024</p>
                    </div>
                    <button className="mt-3 sm:mt-0 text-carmel-red text-sm font-bold hover:underline">View Guide</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionGuide;