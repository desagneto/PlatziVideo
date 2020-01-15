import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/play-icon.png'
import {connect} from "react-redux";
import {deleteFavourite, setFavourite} from "../actions";

const CarouselItem = (props) => {

    const {id, cover, title, year, contentRating, duration} = props;

    const handleSetFavourite = () => {
        props.setFavourite({
            id, cover, title, year, contentRating, duration
        })
    };

    const handleDeleteFavourite = (itemId) => {
        props.deleteFavourite(itemId)
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/>

                    {props.isList ?

                        <img className="carousel-item__details--img"
                             src={removeIcon}
                             alt="Delete Icon"
                             onClick={() => handleDeleteFavourite(id)}/>

                        :

                        <img className="carousel-item__details--img"
                             src={plusIcon}
                             alt="Plus Icon"
                             onClick={handleSetFavourite}/>
                    }

                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    );

};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

// export default CarouselItem;

const mapDispatchToProps = {
    setFavourite,
    deleteFavourite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
