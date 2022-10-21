import React, {useState, useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import InfiniteCarousel from 'react-leaf-carousel';
import axios from "axios";
import style from './Tours.css'

function Tours() {
    let carouselItems = [];

    const {loading, error, data} = useQuery(gql`{
  histories {
    flight {
      links {
        flickr_images
      }
      mission_name
    }
    id
    title
  }
}
`);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error :( Pls, refresh the page.</p>;
    }

    if (data.histories) {
        let histories = data.histories;
        histories.forEach(function (element) {
            if (element && element.flight && element.flight.links && element.flight.links.flickr_images
             && element.flight.links.flickr_images[0]) {
                let carouselItem = {
                    id: element.id,
                    title: element.title,
                    mission_name: element.flight.mission_name,
                    image: element.flight.links.flickr_images[0]
                }

                carouselItems.push(carouselItem)
            }
        });
    }

    return (
        <InfiniteCarousel
            breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0}
            sideSize={.1}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={true}
        >
                {carouselItems.map((item) => (
                    <div class='tours-block' key={item.id}>
                        <img class='img-tours' src={item.image} alt={item.title}/>
                        <div class='title-tours' >{item.title}</div>
                        <div class='name-tours' >{item.mission_name}</div>
                        <div class='btn-tours-div'>
                            <button class='btn-tours-buy'>Buy</button>
                            <div  class='btn-tours-heart' onClick={addToFavourites.bind(this, item)}></div>
                        </div>
                    </div>
                ))}
        </InfiniteCarousel>
    )
}

export default Tours;

function addToFavourites(item) {
    try {
        axios.post('http://localhost:3000/favourites', item).then(resp => {
        });
    } catch (error) {
        alert(error)
    }
}
