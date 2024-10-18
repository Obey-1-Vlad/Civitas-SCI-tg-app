import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-xl text-gray-400 text-center max-w-md mb-8">
        This page is under construction. Please check back later.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Get Back
      </button>
    </div>
  );
};
