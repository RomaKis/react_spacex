import topImage from '../assets/images/img-favourites-top.png'
import React, {useEffect, useState} from "react";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favourites = () => {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
            try {
                axios.get('http://localhost:3000/favourites').then(resp => {
                    setCarouselItems(resp.data)
                });
            } catch (error) {
                alert(error)
            }

    }, []);

    function removeFromFavourites(itemId) {
        try {
            axios.delete('http://localhost:3000/favourites' + '/' + itemId).then(resp => {
                setCarouselItems(carouselItems.filter((x) => x.id !== itemId))
            });
        } catch (error) {
            alert(error)
        }
    }
    function removeAllFromFavourites() {
        try {
            carouselItems.forEach(function(carouselItem){
                axios.delete('http://localhost:3000/favourites' + '/' + carouselItem.id).then(resp => {
                    }
                );
            });
            setCarouselItems([]);
        } catch (error) {
            alert(error)
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: 1,
        arrows: true
    };

    return (
        <div>
            <div class='btn-clear-all' onClick={removeAllFromFavourites}><span>Clear all</span></div>
        <Slider {...settings}>
            {carouselItems.map((item) => (
                <div class='favourites-block' key={item.id}>
                    <img class='img-favourites' src={item.image} width='100%' alt={item.title}/>
                    <div class='title-favourites'>{item.title}</div>
                    <div class='name-favourites'>{item.mission_name}</div>
                    <div class='btn-favourites-div' >
                        <button class='btn-favourites-buy'>Buy</button>
                        <button class='btn-favourites-remote'  onClick={removeFromFavourites.bind(this, item.id)}></button>
                    </div>
                </div>
                
            ))}
        </Slider>
        </div>
    )
}
export default Favourites;


