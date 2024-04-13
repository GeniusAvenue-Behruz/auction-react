import React, { useState, useEffect } from 'react';
import creatorData from './creators.json';
import defaultImg from './auction4.svg';

function CreatorsGrid() {
    const initialVisibleCount = 4;
    const [visibleCreators, setVisibleCreators] = useState(creatorData.slice(0, initialVisibleCount));
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    const shortenList = () => {
        setVisibleCount(initialVisibleCount);
    };

    useEffect(() => {
        setVisibleCreators(creatorData.slice(0, visibleCount));
    }, [visibleCount]);

    return (
        <div className="mx-auto mt-[90px] container">
            <div className="auction__head flex justify-between items-center mb-8">
                <h2 className='text-2xl font-bold'>Top Creators</h2>
                <a href="#!" className="text-blue-600 hover:text-blue-800">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {visibleCreators.map((creator) => (
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg" key={creator.id}>
                        <div className="relative">
                            <img
                                src={creator.headerImage || defaultImg}
                                alt={`${creator.name}`}
                                className="w-full h-48 object-cover"
                            />
                            <img
                                src={creator.profileImage || defaultImg}
                                alt={`${creator.name}`}
                                className="rounded-full w-20 h-20 absolute -bottom-10 left-4 border-4 border-white"
                            />
                        </div>
                        <div className="pt-16 pb-4 px-4">
                            <h3 className="text-lg font-bold mb-1">
                                {creator.name} {creator.verified && <span className="text-blue-500 ml-2">✓</span>}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {creator.description}
                            </p>
                            <span className="text-gray-500 text-sm mb-4 block">
                                {creator.followers} Followers
                            </span>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-bold text-sm focus:outline-none hover:bg-blue-600">
                                Follow
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-14 space-x-4'>
                {visibleCount < creatorData.length && (
                    <button
                        className="bg-transparent w-[200px] text-sm font-medium text-black py-2 px-8 rounded-full outline-none border border-solid border-[#AEAEB2]/20 hover:bg-[#AEAEB2]/40"
                        onClick={loadMore}
                    >
                        Load More
                    </button>
                )}
                {visibleCount > initialVisibleCount && (
                    <button
                        onClick={shortenList}
                        className="bg-transparent w-[200px] text-sm font-medium text-black py-2 px-8 rounded-full outline-none border border-solid border-[#AEAEB2]/20 hover:bg-[#AEAEB2]/40"
                    >
                        Shorten
                    </button>
                )}
            </div>
        </div>
    );
}

export default CreatorsGrid;
