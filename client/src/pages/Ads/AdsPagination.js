import React from 'react';


const AdsPagination = ( {postsPerPage, totalPosts, paginate} ) => {

    const pageNumbers = [];

    for (let index = 1; index < Math.ceil(totalPosts / postsPerPage)+1; index++) {
        pageNumbers.push(index);
    }

    return (
        <div className="d-flex  justify-content-center mt-5">
            <nav>
                <ul className="pagination flex-wrap">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        
    );
}

export default AdsPagination;