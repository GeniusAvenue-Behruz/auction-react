import React from 'react';

function HeaderContent() {
  return (
    <div className="header__content container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 mt-12 lg:mt-32">
      <div className="header__content-left bg-gray-300 lg:col-span-8 rounded-lg"></div>
      <div className="header__content-right lg:col-span-4 bg-white shadow-md p-4 lg:p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-black mb-4">The circle's pristine cleanliness</h3>
        <div className="box">
          <img src='imgs/headerimg.svg' alt="" />
          <span>Tung Tran</span>
        </div>
        <table className="w-full mt-10">
          <thead>
            <tr>
              <th className="text-left text-base font-normal text-black border-r border-gray-300">Current Bid</th>
              <th className="pl-6 text-base font-normal" colSpan="3">Auction ends in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-gray-300 pr-6 text-3xl font-bold">0.85 ETH</td>
              <td className="pl-6 text-xl font-medium">3</td>
              <td className="text-xl font-medium">16</td>
              <td className="text-xl font-medium">58</td>
            </tr>
            <tr>
              <td className="border-r border-gray-300 pr-6 text-base font-medium">$2,169.42</td>
              <td className="pl-6 text-base font-medium">Hours</td>
              <td className="text-base font-medium">Minutes</td>
              <td className="text-base font-medium">Seconds</td>
            </tr>
          </tbody>
        </table>
        <div className="header__content-btns flex flex-col mt-16">
          <button className="py-5 px-0 bg-blue-500 text-white text-xl font-semibold rounded-full">Place a bid</button>
          <a href="#!" className="flex justify-center mt-4 text-blue-500 text-base font-medium">View artwork</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
