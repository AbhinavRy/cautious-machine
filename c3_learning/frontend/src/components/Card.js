import React from 'react';

const Card = (props) => {
    return(
        <div className="card is-hidden1 inline">
            <div className="card-header"><p class="card-header-title">{props.name}</p></div>
            <div className="card-content"><div class="content">Content</div></div>
        </div>
    );
};

export default Card;