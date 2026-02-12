import React, { useState } from 'react';

interface ProtectedRouteProps {
  role: 'SHEPHERD' | 'FACILITATOR' | 'MEMBER';
  children: React.ReactNode;
  title: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children, title }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate both User ID and Password
    if (userId === '123' && password === '123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect User ID or Password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-xl border-t-4 border-carmel-red">
        <div>
          <div className="mx-auto h-16 w-16 bg-red-50 text-carmel-red flex items-center justify-center rounded-full">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-serif font-bold text-gray-900">
            {title} Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            This area is restricted to {title.toLowerCase()}s.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
              <input
                id="userId"
                name="userId"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-carmel-red focus:border-carmel-red focus:z-10 sm:text-sm"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-carmel-red focus:border-carmel-red focus:z-10 sm:text-sm"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-carmel-red text-sm text-center bg-red-50 p-2 rounded border border-red-100">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded text-white bg-carmel-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-carmel-red uppercase tracking-wide transition-colors"
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center mt-4">
             <p className="text-xs text-gray-400">
                 Test Credentials: ID: 123 | Password: 123
             </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProtectedRoute;