import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-[90px]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-[20px] font-semibold mb-4">Get the latest Rolling updates</h2>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md text-black"
              />
              <button className="bg-blue-600 text-white rounded-r-md px-6 hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h3 className="font-semibold mb-2">Rolling</h3>
              <ul>
                <li><a href="#!" className="hover:underline">Explore</a></li>
                <li><a href="#!" className="hover:underline">Blog</a></li>
                <li><a href="#!" className="hover:underline">About us</a></li>
                <li><a href="#!" className="hover:underline">Become a partner</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul>
                <li><a href="#!" className="hover:underline">Community Guidelines</a></li>
                <li><a href="#!" className="hover:underline">Roll Token</a></li>
                <li><a href="#!" className="hover:underline">Discussion</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>Rolling Terms of Service Privacy</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#!" className="hover:text-blue-600">[Instagram icon]</a>
          <a href="#!" className="hover:text-blue-600">[Twitter icon]</a>
          <a href="#!" className="hover:text-blue-600">[LinkedIn icon]</a>
          <a href="#!" className="hover:text-blue-600">[YouTube icon]</a>
          <a href="#!" className="hover:text-blue-600">[Medium icon]</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
