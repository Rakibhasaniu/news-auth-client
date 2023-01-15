import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitterSquare, FaWhatsappSquare, FaDiscord } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='text-start'>

            <ButtonGroup vertical>
                <Button
                    onClick={handleGoogleSignIn}
                    className='mb-2'
                    variant="outline-primary ">Login With Google <FaGoogle></FaGoogle></Button>
                <Button
                    variant="outline-secondary">Login With Github <FaGithub></FaGithub></Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook>   FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube></FaYoutube>   YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitterSquare></FaTwitterSquare>   Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsappSquare></FaWhatsappSquare>   WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaDiscord></FaDiscord>   Discord</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;