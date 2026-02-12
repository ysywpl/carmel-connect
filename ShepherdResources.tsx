import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { SHEPHERD_RESOURCES } from '../constants';
import { generateDiscussionQuestions } from '../services/geminiService';

const ShepherdResources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resources' | 'report'>('resources');

  return (
    <ProtectedRoute role="SHEPHERD" title="House Group Shepherd">
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
             <h1 className="text-3xl font-serif font-bold text-gray-900">Shepherd Portal</h1>
             <p className="mt-2 text-gray-600">Equipping leaders and tracking growth.</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${activeTab === 'resources' ? 'border-carmel-red text-carmel-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('resources')}
            >
                Resources & Tools
            </button>
            <button 
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${activeTab === 'report' ? 'border-carmel-red text-carmel-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('report')}
            >
                Monthly Report Log
            </button>
          </div>
          
          {activeTab === 'resources' ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
                {/* Left Column: Static Resources */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded shadow-sm border-t-4 border-carmel-red p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="bg-red-100 text-carmel-red p-2 rounded-full mr-3">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </span>
                            Essential Downloads
                        </h2>
                        <ul className="divide-y divide-gray-100">
                            {SHEPHERD_RESOURCES.map(resource => (
                                <li key={resource.id} className="py-5 hover:bg-gray-50 transition-colors rounded-md px-2 -mx-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-800 hover:text-carmel-red cursor-pointer transition-colors">{resource.title}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500 uppercase tracking-wide">{resource.type}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Pastoral Updates</h2>
                        <div className="prose prose-sm text-gray-600 bg-yellow-50 p-4 rounded-md border border-yellow-100">
                            <p className="mb-2"><strong className="text-yellow-800">Monthly Meeting:</strong> Next shepherd meeting is on Oct 24th at 7:30 PM in the Fellowship Hall.</p>
                            <p><strong className="text-yellow-800">Prayer Focus:</strong> Please remember to pray for the upcoming missions month. Guides will be distributed next Sunday.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: AI Assistant */}
                <div className="lg:col-span-1">
                    <AIGenerator />
                </div>
              </div>
          ) : (
            <ReportForm />
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

const ReportForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    
    // Form State
    const [groupName, setGroupName] = useState('');
    const [studyMaterial, setStudyMaterial] = useState('');
    const [meetingsCount, setMeetingsCount] = useState('4');
    const [challenges, setChallenges] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [attendanceAvg, setAttendanceAvg] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to backend
        console.log({ groupName, studyMaterial, meetingsCount, attendanceAvg, challenges, suggestions });
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto bg-white p-12 rounded-xl shadow-lg border-t-4 border-green-500 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Report Submitted!</h2>
                <p className="text-gray-600 mb-8">Thank you for your faithful service and for keeping us updated. Your monthly report has been logged successfully.</p>
                <button 
                    onClick={() => {
                        setSubmitted(false);
                        setChallenges('');
                        setSuggestions('');
                    }}
                    className="bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded hover:bg-gray-200 transition-colors uppercase tracking-wide text-sm"
                >
                    Submit Another Report
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 flex items-center justify-between">
                    <div>
                         <h2 className="text-xl font-serif font-bold text-gray-900">Monthly Care Group Log</h2>
                         <p className="text-sm text-gray-500 mt-1">Please fill this out at the end of each month.</p>
                    </div>
                    <div className="hidden sm:block text-carmel-red">
                         <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Group Name</label>
                            <input 
                                type="text"
                                required 
                                value={groupName}
                                onChange={e => setGroupName(e.target.value)}
                                placeholder="e.g. Berean Builders"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Times Met This Month</label>
                            <select 
                                value={meetingsCount}
                                onChange={e => setMeetingsCount(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Current Study Material</label>
                            <input 
                                type="text" 
                                required
                                value={studyMaterial}
                                onChange={e => setStudyMaterial(e.target.value)}
                                placeholder="e.g. Book of James"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Average Attendance</label>
                            <input 
                                type="number" 
                                required
                                value={attendanceAvg}
                                onChange={e => setAttendanceAvg(e.target.value)}
                                placeholder="e.g. 12"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Pastoral Challenges / Prayer Needs</label>
                        <p className="text-xs text-gray-500 mb-2">Are there any issues (relational, spiritual, health) regarding members that the pastoral team should know?</p>
                        <textarea 
                            rows={4}
                            value={challenges}
                            onChange={e => setChallenges(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            placeholder="Share any difficulties or prayer requests..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Suggestions / Feedback</label>
                        <textarea 
                            rows={3}
                            value={suggestions}
                            onChange={e => setSuggestions(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-carmel-red focus:bg-white transition-all"
                            placeholder="Ideas for church-wide improvement or resource needs..."
                        ></textarea>
                    </div>

                    <div className="pt-4 flex items-center justify-end border-t border-gray-100">
                        <button 
                            type="submit"
                            className="bg-carmel-red text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition-colors shadow-md uppercase tracking-wide text-sm"
                        >
                            Submit Monthly Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const AIGenerator: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        const response = await generateDiscussionQuestions(topic, "a diverse church home group");
        setResult(response);
        setLoading(false);
    };

    return (
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 text-white sticky top-28">
            <h2 className="text-lg font-bold mb-4 flex items-center text-white">
                <span className="bg-carmel-red p-1.5 rounded mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                Shepherd's Assistant
            </h2>
            <p className="text-gray-400 text-sm mb-6">
                Need specific questions for your group discussion? Enter a bible topic or passage below.
            </p>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-2">Topic / Passage</label>
                    <input 
                        type="text" 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Romans 8, Grace, Anxiety"
                        className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-carmel-red focus:border-carmel-red"
                    />
                </div>
                <button 
                    onClick={handleGenerate}
                    disabled={loading || !topic}
                    className="w-full bg-carmel-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase text-xs tracking-wider"
                >
                    {loading ? 'Generating...' : 'Generate Questions'}
                </button>
            </div>

            {result && (
                <div className="mt-8 pt-6 border-t border-gray-700 animate-fade-in">
                    <h3 className="text-xs font-bold text-carmel-red uppercase tracking-wide mb-3">AI Suggestions:</h3>
                    <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed p-4 bg-gray-800 rounded">
                        {result}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShepherdResources;