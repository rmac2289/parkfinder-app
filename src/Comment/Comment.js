import React from 'react';
import './Comment.css';


export default function Comment(props){
    return (
                <li className="comment">
                    <header className="comment-heading-container">
                        <h2 className="comment-heading">{props.subject}</h2>
                    </header>
                    <p className="comment-comment">{props.comment}</p>
                    <p className="comment-user"><strong>by:</strong> {props.user}</p>
                    <p className="comment-date"><strong>posted on:</strong> {props.date}</p>
                </li>
    )
}