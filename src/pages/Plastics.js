import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PlasticContext } from '../context/plastics';


const Plastics = () => {
    const { plastics } = useContext(PlasticContext);

    if (!plastics.length) {
        return <h3>No Plastics Available</h3>
    }

    return (
        <section className="books">
            {plastics.map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`books/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Plastics
