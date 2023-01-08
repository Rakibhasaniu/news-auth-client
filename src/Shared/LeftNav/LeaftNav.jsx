import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';

const LeaftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='text-start'>
            <h2>All Category: {categories.length}</h2>
            <div>
                {categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>


                </p>)}
            </div>
        </div>
    );
};

export default LeaftNav;