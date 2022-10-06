import React, {useState, useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import InfiniteCarousel from 'react-leaf-carousel';
import axios from "axios";

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
                    <div key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <div>{item.title}</div>
                        <div>{item.mission_name}</div>
                        <div>
                            <button>Buy</button>
                            <button onClick={addToFavourites.bind(this, item)}>Heart</button>
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
