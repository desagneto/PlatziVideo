import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import {connect} from "react-redux";
import {setFavourite} from "../actions";

const CarouselItem = (props) => {

    const {cover, title, year, contentRating, duration} = props;

    const handleSetFavourite = () => {
        props.setFavourite({
            cover, title, year, contentRating, duration
        })
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/>
                    <img className="carousel-item__details--img"
                         src={plusIcon}
                         alt="Plus Icon"
                         onClick={handleSetFavourite}/>
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
};

export default connect(null, mapDispatchToProps)(CarouselItem);
