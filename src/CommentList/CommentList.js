import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core'
import './CommentList.css';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import CommentsApiService from '../services/CommentsApiService';
import { CommentsContext } from '../Contexts/CommentsContext';
import { FullParkNameContext } from '../Contexts/ParkNameContext';
import moment from 'moment';

export default function CommentList(props){
    const [comments, setComments] = useContext(CommentsContext);
    const [fullParkName] = useContext(FullParkNameContext);
    const history = useHistory();
    const [hovering, setHovering] = useState(false);
    const [toggleOpen, setToggleOpen] = useState(false);

    useEffect(() => {
        CommentsApiService.getComments()
          .then(data => setComments(data))
          .catch((error) => { console.error('Error:', error) });
      }, []);
     
      const commentArray = Object.values(comments)
      const filteredCommentArray = commentArray.filter((v) => {
          return v.park_name.toLowerCase() === fullParkName.toLowerCase()
      });

      const commentList = filteredCommentArray.map((v,i) => {
          return <Comment key={i} date={v.date} subject={v.subject} comment={v.comments} user={v.user_name} />
      }); 

      const isHovering = () => {
        return setHovering(true);
    };
    const isntHovering = () => {
        return setHovering(false);
    };
    const toggleOpenForm = () => {
        return toggleOpen ? setToggleOpen(false):setToggleOpen(true)
    }

    return (
                <div className="comment-list-page">
                    <div className="comment-list">
                    <nav className="back-nav">
                <button onClick={() => history.goBack()}><FontAwesomeIcon onMouseLeave={isntHovering} onMouseEnter={isHovering} id="back-arrow" icon={faArrowAltCircleLeft}/>{hovering && <span id="back-span">go back</span>}</button>
            </nav>
                    {fullParkName !== '' && 
                    <header className="comment-list-heading-container">
                        <h1 className="comment-list-heading">{fullParkName}</h1>
                    </header>}
                    <div className="comment-toggle-container">
                    <div className="comment-form-toggle sb1" onClick={toggleOpenForm}>post comment <br/><FontAwesomeIcon id="comment-toggle-icon" icon={faCaretDown} /></div>
                    </div>
                    {toggleOpen && <CommentForm />}
                    <ul className="comment-list-list">
                        {comments.length > 0 && commentList}
                    </ul>
                    </div>
                </div>
    )
}