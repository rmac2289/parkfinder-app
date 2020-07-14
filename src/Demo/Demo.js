import React from 'react';
import './Demo.css';

export default function Demo(){
    return (
    <div className="demo">
        <p className="demo-p"><strong>Login</strong> - username: <strong>user2</strong> and password: <strong>User1111!</strong><br/>
        <strong>Options:</strong><br/>
        - Click on the trees in the map below to find information on that location, and click on the link
        to follow to the park's full page.<br/>
        - Search by park name or activities (or both) and submit your
        search - this will take you to a park list page, where you can click on the park name for more
        information. <br/>
        - To add a park, click on the suggest a park link in the nav bar (must be logged in).<br/>
        - To post a comment on a park, go to the park's page, click on user comments, and click post comment (also 
        must be logged in). <br/>
        - Enjoy!</p>
    </div>
    )
}