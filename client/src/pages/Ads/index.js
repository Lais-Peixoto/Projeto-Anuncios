import React, { useState, useEffect } from 'react';
import { AdsArea } from './styled';
import AdsPagination  from './AdsPagination';

import { useDispatch, useSelector } from 'react-redux';
import { GetAllAds } from '../../redux/ads/actions';


const Ads = () => {

    const useFetching = (someFetchActionCreator) => {
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(someFetchActionCreator());
        }, [dispatch, someFetchActionCreator])
    }

    useFetching(GetAllAds);
    const adsData = useSelector( state => state.anuncios.ads );
    console.log(adsData.length);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerpage ] = useState(10);


    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPosts = adsData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(currentPosts);

    return (
        <AdsArea>
            <div className="container">
                <div class="ads-main-area">
                    {currentPosts.map((ad) => {
                        return <div key={ad.id} className="ad">
                            <h2>{ad.title}</h2>
                            <p>{ad.content}</p>
                            <p className="date">Publicado em {ad.createdat.substr(0,10)}</p>
                        </div>;
                    })}

                    <AdsPagination postsPerPage={postsPerpage} totalPosts={adsData.length} paginate={paginate} />
                </div>
                
            </div>
            
        </AdsArea>
    );
}

export default Ads;