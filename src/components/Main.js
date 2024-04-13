import React from 'react';
import AuctionSection from './AuctionSection';
import Creators from './CreatorsSection'
import Footer from './Footer'
const Main = () => {  
      return (
        <div className="App">
          <AuctionSection title="Live Auctions🔥" id="live-auctions" auctionsFile="liveAuction" />
          <AuctionSection title="Featured" id="featured-auctions" auctionsFile="featuredAuction" />
          <Creators />
          <Footer />
        </div>
      );
}

export default Main;
