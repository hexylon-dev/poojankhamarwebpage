import React from 'react';

const TableOfContents = () => {
  return (
    <div className="bg-black/5 p-6 rounded-lg sticky top-12">
      <h2 className="font-serif text-2xl font-bold mb-6 text-Black">WHAT'S INSIDE</h2>
      <ul className="space-y-4">
        <li>
          <a href="#introduction" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
            Introduction
          </a>
        </li>
        <li>
          <a href="#current-state" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
            The Current State of AI in Healthcare
          </a>
        </li>
        <li>
          <a href="#key-areas" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
            Key Areas Where AI is Making an Impact
          </a>
          <ul className="ml-4 mt-2 space-y-2">
            <li>
              <a href="#predictive-diagnostics" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
                Predictive Diagnostics and Early Detection
              </a>
            </li>
            <li>
              <a href="#personalized-treatment" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
                Personalized Treatment Plans
              </a>
            </li>
            <li>
              <a href="#operational-efficiency" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
                Operational Efficiency and Cost Reduction
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#why-hexylon" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
            Why Choose Hexylon for AI in Healthcare
          </a>
        </li>
        <li>
          <a href="#conclusion" className="text-gray-400 hover:text-[#ff6600] transition-colors duration-300">
            Conclusion
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;