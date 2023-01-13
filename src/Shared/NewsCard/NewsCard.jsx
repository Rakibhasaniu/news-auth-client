import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAltSquare } from "react-icons/fa";


const NewsCard = ({ news }) => {
    const { title, _id, total_view, author, details, image_url } = news;
    return (
        <Card className="">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='ms-5'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAltSquare></FaShareAltSquare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 250 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card >
    );
};

export default NewsCard;