import React, { useState, useEffect } from 'react';
import liveAuctions from './liveAuctions.json';
import featuredAuctions from './featuredAuctions.json';
import defaultImg from './auction4.svg';

function AuctionSection({ title, id, auctionsFile }) {
  let allAuctions;
  if (auctionsFile === 'liveAuction') {
    allAuctions = liveAuctions;
  } else if (auctionsFile === 'featuredAuction') {
    allAuctions = featuredAuctions;
  }

  const initialVisibleCount = 4;
  const [auctions, setAuctions] = useState(allAuctions.slice(0, initialVisibleCount));
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const shortenList = () => {
    setVisibleCount(initialVisibleCount);
  };

  useEffect(() => {
    setAuctions(allAuctions.slice(0, visibleCount));
  }, [visibleCount, allAuctions]);

  return (
    <section className="auction container mx-auto mt-[90px]" id={id}>
      <div className="auction__head flex justify-between items-center mb-8">
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div>
          <a href="#!" className="text-blue-600 hover:text-blue-800">View all auctions</a>

        </div>
      </div>
      <div className="auction__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {auctions.map((auction) => (
          <div className="auction__card bg-white rounded-lg shadow-xl overflow-hidden" key={auction.id}>
            <div className="auction__card-head relative">
              <img
                src={auction.imgSrc || defaultImg}
                alt={auction.title}
                className="w-full h-72 object-cover bg-gray-200"
                onError={(e) => { e.currentTarget.src = defaultImg; }}
              />
              <div className="absolute top-4 right-4 bg-blue-600 bg-opacity-75 text-white py-1 px-3 rounded-lg">
                <span className="text-xs">{auction.hoursLeft} hours left</span>
              </div>
            </div>
            <div className="auction__card-body p-4">
              <h3 className="text-xl font-semibold mb-2 truncate">{auction.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <img
                    src={auction.authorImgSrc || defaultImg}
                    alt={auction.author}
                    className="w-10 h-10 rounded-full bg-gray-300 object-cover mr-2"
                    onError={(e) => { e.currentTarget.src = defaultImg; }}
                  />
                  <span className="text-sm font-medium truncate">{auction.author}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Current Bid</span>
                  <p className="text-lg font-semibold">{auction.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='flex justify-center items-center mt-14'>
        {visibleCount < allAuctions.length && (

          <button
            onClick={loadMore}
            className="bg-transparent w-[200px] text-sm font-medium text-black py-2 px-8 mt-14 rounded-full outline-none border border-solid border-[#AEAEB2]/20 hover:bg-[#AEAEB2]/40"
          >
            Load More
          </button>
        )}
        {visibleCount > initialVisibleCount && (
          <button
            onClick={shortenList}
            className="bg-transparent w-[200px] text-sm font-medium text-black py-2 px-8 mt-14 rounded-full outline-none border border-solid border-[#AEAEB2]/20 hover:bg-[#AEAEB2]/40"
          >
            Hide Rows
          </button>
        )}
      </div>

    </section>
  );
}

export default AuctionSection;
