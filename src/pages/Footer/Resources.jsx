import React from 'react';

const Resources = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/faq" className="text-blue-600 underline">FAQs</a></li>
        <li><a href="/contact" className="text-blue-600 underline">Contact Support</a></li>
        <li><a href="/blog" className="text-blue-600 underline">Dog Care Blog</a></li>
        <li><a href="/chewselector" className="text-blue-600 underline">Chew Selector</a></li>
      </ul>
    </div>
  );
};

export default Resources;
