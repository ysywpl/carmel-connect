import React from 'react';
import { DISCIPLESHIP_STEPS } from '../constants';

const DiscipleshipPathway: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-carmel-red tracking-widest uppercase">Our Journey</h2>
          <h1 className="mt-2 text-4xl font-serif font-bold text-gray-900 sm:text-5xl">
            Discipleship Pathway
          </h1>
          <div className="w-20 h-1 bg-carmel-red mx-auto mt-6"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto font-light">
            A deliberate process to help you grow in maturity and likeness to Christ.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-red-100 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {DISCIPLESHIP_STEPS.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center group h-full">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-red-100 group-hover:border-carmel-red flex items-center justify-center text-5xl mb-6 shadow-sm group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative z-10 bg-white">
                    <span>{step.icon}</span>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-carmel-red rounded-full text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">
                        {step.step}
                    </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px] flex items-center">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm px-2 mb-6 min-h-[60px]">{step.description}</p>
                
                {/* Resources List */}
                <div className="w-full px-4 mt-auto">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Resources</h4>
                    <ul className="space-y-2">
                        {step.resources?.map((res, i) => (
                            <li key={i}>
                                <a href={res.url} className="block w-full py-2.5 px-3 bg-white border border-red-100 hover:border-carmel-red hover:bg-red-50 text-carmel-red text-xs font-bold uppercase tracking-wide rounded transition-all shadow-sm">
                                    {res.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Connector */}
                {index < DISCIPLESHIP_STEPS.length - 1 && (
                    <div className="lg:hidden h-12 w-0.5 bg-red-100 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-gray-50 rounded-xl p-8 sm:p-16 text-center border border-gray-100">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Where are you on the journey?</h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Whether you are exploring Christianity or looking to serve, we have resources to help you take the next step.
          </p>
          <button className="bg-carmel-red text-white px-10 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-md uppercase tracking-wide text-sm">
            Speak to a Pastor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipPathway;