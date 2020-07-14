import React from 'react';
import './Comment.css';
import moment from 'moment';

export default function Comment(props){
    const date = props.date;
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY");
    
    return (
                <li className="comment">
                    <header className="comment-heading-container">
                        <h2 className="comment-heading">{props.subject}</h2>
                    </header>
                    <p className="comment-comment">{props.comment}</p>
                    <p className="comment-user"><strong id="by">by:</strong> {props.user}</p>
                    <p className="comment-date"><strong id="posted-on">posted on:</strong>{formattedDate}</p>
                </li>
    )
};