import React, { useContext } from 'react';
import './CommentForm.css';


export default function CommentForm(props){
    return (
        <div className="comment-form-page">
            <form className="comment-form">
            <h3 id="comment-header">leave your thoughts on the park or see what others had to say!</h3>
                <div className="comment-input-container">
                    <label htmlFor="comment-subject">subject</label>
                    <input id="comment-subject" name="comment subject" type="text" />

                </div>
                <div className="comment-input-container">
                    <label htmlFor="comment-comment">comments</label>
                    <textarea id="comment-comment" name="comment-comment" rows="5" />

                </div>
                <div className="button-container">
                <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}