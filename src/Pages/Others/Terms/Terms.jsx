import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Here Is Our Terms And Condition</h3>
            <p>Go back to: <Link to='/signup'>Sign Up</Link> </p>
        </div>
    );
};

export default Terms;