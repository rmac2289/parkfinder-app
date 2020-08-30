import React, { useContext, useState } from "react";
import "./CommentForm.css";
import CommentsApiService from "../services/CommentsApiService";
import { CommentsContext } from "../Contexts/CommentsContext";
import { FullParkNameContext } from "../Contexts/ParkNameContext";

export default function CommentForm() {
  const [subject, setSubject] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useContext(CommentsContext);
  const [fullParkName] = useContext(FullParkNameContext);

  // handle comment POST and immediately display new comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const text = {
      date: new Date(),
      comments: newCommentText,
      user_name: sessionStorage.getItem("username"),
      subject: subject,
      park_name: fullParkName,
    };
    const newComments = comments.concat([text]);
    CommentsApiService.postComment(text.subject, text.comments, text.park_name)
      .then(setComments(newComments))
      .catch((error) => console.error(error));
    setSubject("");
    setNewCommentText("");
    window.scrollTo({ bottom: 0, behavior: "smooth" });
  };
  const getComment = (e) => {
    return setNewCommentText(e.target.value);
  };
  const getSubject = (e) => {
    return setSubject(e.target.value);
  };
  return (
    <div className="comment-form-page">
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <h2 id="comment-header">
          leave thoughts, ideas, or recommendations for your fellow parkgoers
        </h2>
        <div className="comment-input-container">
          <label htmlFor="comment-subject">subject</label>
          <input
            id="comment-subject"
            name="comment subject"
            type="text"
            value={subject}
            onChange={getSubject}
          />
        </div>
        <div className="comment-input-container">
          <label htmlFor="comment-comment">comments</label>
          <textarea
            id="comment-comment"
            name="comment-comment"
            onChange={getComment}
            value={newCommentText}
            rows="5"
          />
        </div>
        <div className="button-container">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
