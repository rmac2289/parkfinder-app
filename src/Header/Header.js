import React from 'react';
import './Header.css';



export default function Header(){
    return (
    <div className="header">
        <header className="header-box">
            <h1 className="header-text">find your park</h1>
            <p className="header-p">Search for California parks by name or narrow your search
                by what activities are offered - once you find what you're looking for,
                check out the park details and comments left by other users. If you've experienced the park
                yourself, sign up for an account and leave your own comments. Don't see your local park listed?
                Head to the 'Suggest a Park' link above and submit it for review.
            </p>
        </header>
    </div>
    )
}