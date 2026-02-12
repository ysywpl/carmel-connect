import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const MemberProgress: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'dashboard'>('daily');

  return (
    <ProtectedRoute role="MEMBER" title="Member">
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
             <h1 className="text-3xl font-serif font-bold text-gray-900">Spiritual Progress Log</h1>
             <p className="mt-2 text-gray-600">Track your walk, reflect on God's goodness, and grow daily.</p>
          </div>

          <div className="flex border-b border-gray-200 mb-8">
            <button 
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'daily' ? 'border-carmel-red text-carmel-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('daily')}
            >
                Daily Entry
            </button>
            <button 
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'dashboard' ? 'border-carmel-red text-carmel-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('dashboard')}
            >
                My Dashboard
            </button>
          </div>

          {activeTab === 'daily' ? <DailyLogForm /> : <Dashboard />}
        </div>
      </div>
    </ProtectedRoute>
  );
};

const DailyLogForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [notes, setNotes] = useState('');
    const [practices, setPractices] = useState({
        bible: false,
        prayer: false,
        worship: false,
        fellowship: false
    });
    const [fruits, setFruits] = useState({
        love: 3,
        joy: 3,
        peace: 3,
        patience: 3,
        kindness: 3
    });

    const handleFruitChange = (fruit: keyof typeof fruits, val: number) => {
        setFruits(prev => ({...prev, [fruit]: val}));
    };

    const handlePracticeChange = (practice: keyof typeof practices) => {
        setPractices(prev => ({...prev, [practice]: !prev[practice]}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <div className="bg-white p-12 rounded-xl shadow border-t-4 border-green-500 text-center animate-fade-in max-w-2xl mx-auto">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Entry Saved</h3>
                <p className="text-gray-600 mb-6">"Grow in the grace and knowledge of our Lord and Savior Jesus Christ." - 2 Peter 3:18</p>
                <button onClick={() => setSubmitted(false)} className="text-carmel-red font-bold hover:underline">Log another day</button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-8 space-y-8">
                    {/* Date */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                        <input type="date" className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-carmel-red focus:border-carmel-red" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>

                    {/* Spiritual Disciplines */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-4">Spiritual Disciplines</label>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: 'bible', label: 'Bible Reading' },
                                { id: 'prayer', label: 'Prayer' },
                                { id: 'worship', label: 'Worship' },
                                { id: 'fellowship', label: 'Fellowship' }
                            ].map((item) => (
                                <div 
                                    key={item.id}
                                    onClick={() => handlePracticeChange(item.id as any)}
                                    className={`cursor-pointer p-4 rounded-lg border flex items-center transition-all ${practices[item.id as keyof typeof practices] ? 'bg-red-50 border-carmel-red text-carmel-red' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 border ${practices[item.id as keyof typeof practices] ? 'bg-carmel-red border-carmel-red text-white' : 'bg-white border-gray-300'}`}>
                                        {practices[item.id as keyof typeof practices] && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="font-medium select-none">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fruit of the Spirit */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Fruit of the Spirit Assessment</label>
                        <p className="text-xs text-gray-500 mb-6">Rate how you saw these fruits manifest in your life today (1 = Poor, 5 = Excellent)</p>
                        
                        <div className="space-y-6">
                            {Object.entries(fruits).map(([fruit, val]) => (
                                <div key={fruit} className="flex items-center">
                                    <span className="w-24 text-sm font-medium text-gray-700 capitalize">{fruit}</span>
                                    <div className="flex-1 flex justify-between items-center px-4">
                                        {[1, 2, 3, 4, 5].map((score) => (
                                            <button
                                                key={score}
                                                type="button"
                                                onClick={() => handleFruitChange(fruit as any, score)}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${val === score ? 'bg-carmel-red text-white transform scale-110 shadow-md' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                                            >
                                                {score}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Journal */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Journal & Reflections</label>
                        <textarea 
                            rows={5}
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-carmel-red focus:border-carmel-red"
                            placeholder="What did God teach you today? What are you thankful for?"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-carmel-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-wide shadow-md">
                            Save Entry
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const Dashboard: React.FC = () => {
    // Mock Data
    const streaks = { bible: 12, prayer: 45 };
    const spiritualGifts = ["Teaching", "Administration", "Hospitality"];
    
    // Simple bar chart visualization using CSS widths
    const fruitTrends = [
        { label: 'Love', val: 80 },
        { label: 'Joy', val: 65 },
        { label: 'Peace', val: 90 },
        { label: 'Patience', val: 40 },
        { label: 'Kindness', val: 75 }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Bible Streak</span>
                    <div className="text-4xl font-serif font-bold text-carmel-red mb-1">{streaks.bible}</div>
                    <span className="text-sm text-gray-400">Days</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Prayer Streak</span>
                    <div className="text-4xl font-serif font-bold text-carmel-red mb-1">{streaks.prayer}</div>
                    <span className="text-sm text-gray-400">Days</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">My Spiritual Gifts</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {spiritualGifts.map(gift => (
                            <span key={gift} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded">{gift}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fruit Trends Chart */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Fruit of the Spirit Trends (Last 30 Days)</h3>
                <div className="space-y-5">
                    {fruitTrends.map((item) => (
                        <div key={item.label}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-gray-700">{item.label}</span>
                                <span className="text-gray-500">{item.val}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div 
                                    className="bg-carmel-red h-2.5 rounded-full transition-all duration-1000 ease-out" 
                                    style={{ width: `${item.val}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Reflections */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Reflections</h3>
                 <div className="space-y-6">
                    <div className="border-l-4 border-gray-200 pl-4 py-1">
                        <span className="text-xs text-gray-400 block mb-1">Oct 24, 2024</span>
                        <p className="text-gray-600 italic">"Felt really challenged by the sermon on patience today. Need to trust God's timing more in my work situation."</p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4 py-1">
                        <span className="text-xs text-gray-400 block mb-1">Oct 23, 2024</span>
                        <p className="text-gray-600 italic">"Grateful for the small group fellowship last night. It reminded me that I'm not alone in this walk."</p>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default MemberProgress;