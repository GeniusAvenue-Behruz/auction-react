import React from 'react';
import AuctionSection from './AuctionSection';
import Creators from './CreatorsSection'
const Main = () => {  
      return (
        <div className="App nothing">
          <AuctionSection title="Live Auctions🔥" id="live-auctions" auctionsFile="liveAuction" />
          <AuctionSection title="Featured" id="featured-auctions" auctionsFile="featuredAuction" initialVisibleCount='8' />
          <Creators />
          
        </div>
      );
}

export default Main;
