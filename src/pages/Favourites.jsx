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
                axios.get('http://localhost:3000/favourites').then(resp => {
                    setCarouselItems(resp.data)
                });
            });
        } catch (error) {
            alert(error)
        }
    }
    function removeAllFromFavourites() {
        try {
            carouselItems.forEach(function(carouselItem){
                axios.delete('http://localhost:3000/favourites' + '/' + carouselItem.id).then(resp => {
                    axios.get('http://localhost:3000/favourites').then(resp => {
                        setCarouselItems(resp.data)
                    });
                });
            });
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
            <img src={topImage} alt="Top Image"/>
            <div onClick={removeAllFromFavourites}><span>Clear all</span></div>
        <Slider {...settings}>
            {carouselItems.map((item) => (
                <div key={item.id}>
                    <img src={item.image} width='100%' alt={item.title}/>
                    <div>{item.title}</div>
                    <div>{item.mission_name}</div>
                    <div>
                        <button>Buy</button>
                        <button onClick={removeFromFavourites.bind(this, item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    )
}
export default Favourites;


