import React from 'react';
import './voteListItem.css';

const voteListItem = (props) => {
    //update content votes based on how client just voted on that content
    let upvotes = props.upvotes;
    let downvotes = props.downvotes;
    if (props.vote === "up") {
        upvotes = upvotes + 1;
    } else if (props.vote === "dn") {
        downvotes = downvotes + 1;
    }

    return (
        <li>
            {props.vote !== "-" && (
            <div>
                <p>{"Index: " + props.ind}</p>
                <p>{"Handle: " + props.handle}</p>
                <p>{"Content: " + props.content}</p>
                <p>{"Ups: " + upvotes + " Downs: " + downvotes}</p>
            </div> )}
            {props.vote === "-" && (<div><p>{"Content: " + props.content}</p></div>)}
            {props.vote === "-" && (<button onClick={props.onVote.bind(this, "up", props.ind)}>UP_vote</button>)}
            {props.vote === "-" && (<button onClick={props.onVote.bind(this, "dn", props.ind)}>DOWN_vote</button>)}
            {props.vote === "-" && (<button onClick={props.onVote.bind(this, "in", props.ind)}>Report/Inappropriate</button>)}
        </li>
    );
}

export default voteListItem;
