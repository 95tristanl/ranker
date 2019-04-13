import React from 'react';
import './rankListItem.css';

const rankListItem = (props) => (
    <li>
        <p>{"Handle: " + props.handle}</p>
        <p>{"Content: " + props.content}</p>
        <p>{"Ups: " + props.upvotes +
            " Downs: " + props.downvotes +
            " BAD: " + props.inappropriate}
        </p>
    </li>
);

export default rankListItem;
