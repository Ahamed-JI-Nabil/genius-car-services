import React from 'react';

const Expert = ({ expert }) => {

    const { name, img } = expert

    return (

        <div className="col col-sm-12 col-md-6 col-lg-4 container">
            <div className="card">
                <img className="card-img-top w-100" src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;