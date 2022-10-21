import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <Link className="btn" to="/plastics">View All Waste</Link>
        </section>
    )
}

export default Hero
