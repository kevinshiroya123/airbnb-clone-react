import React from 'react';
import './Home.css';
import Card from './Card'; // Import the Card component

import image1 from '../images/card 1.avif';
import image2 from '../images/card 2.avif';
import image3 from '../images/card 3.webp';
import image4 from '../images/card 4.webp';
import image5 from '../images/card 5.avif';
import image6 from '../images/card 6.avif';

const Home = () => {
    const cards = [
        {
            image: image1,
            title: 'Online Experiences',
            description: 'Unique activities we can do together, led by a world of hosts.',
        },
        {
            image: image2,
            title: 'Unique stays',
            description: 'Spaces that are more than just a place to sleep.',
        },
        {
            image: image3,
            title: 'Entire homes',
            description: 'Comfortable private places, with room for friends or family.',
        },
        {
            image: image4,
            title: 'Online Experiences',
            description: 'Unique activities we can do together, led by a world of hosts.',
        },
        {
            image: image5,
            title: 'Unique stays',
            description: 'Spaces that are more than just a place to sleep.',
        },
        {
            image: image6,
            title: 'Entire homes',
            description: 'Comfortable private places, with room for friends or family.',
        },
    ];

    return (
        <div className="home">
            <h2>Discover stays</h2>
            <div className="home__cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
