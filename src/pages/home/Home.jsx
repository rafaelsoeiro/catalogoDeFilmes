import React from "react";
import { Container, MovieList, Movie } from "./styles";
import {API_KEY} from "../../config/key"

function Home() {
    const movies = [
        {
            id:1,
            title: "Doutor estranho",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg",
        },
        {
            id:2,
            title: "Doutor estranho",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg",
        },
        {
            id:3,
            title: "Doutor estranho",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg",
        },
        {
            id:4,
            title: "Doutor estranho",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg",
        },
        {
            id:5,
            title: "Doutor estranho",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg",
        },
    ];
    return (
        <Container>
            <h1> Filmes </h1>

            <MovieList>
                {movies.map((movies) => {
                    return (
                        <Movie key={movies.id}>
                            <a href={movies.image_url}>
                                <img
                                    src={movies.image_url}
                                    alt={movies.title}
                                />
                            </a>
                            <span>{movies.title}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
