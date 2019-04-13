import React from 'react';
import './rankList.css';
import RankListItem from '../rankListItem/rankListItem.js';

const rankList = (props) => {
    let list = props.content_R.map(item => {
        return <RankListItem
                    key={item._id}
                    handle={item.handle}
                    content={item.content}
                    upvotes={item.upvotes}
                    downvotes={item.downvotes}
                    inappropriate={item.inappropriate}
                />
    });
    return <ul>{list}</ul>;
}

export default rankList;
