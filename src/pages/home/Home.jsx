import React, { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "./styles";
import { APIKEY, image_path } from "../../config/key";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //Consumir api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
    }, []);

    return (
        <Container>
            <h1> Filmes </h1>

            <MovieList>
                {movies.map((movies) => {
                    return (
                        <Movie key={movies.id}>
                            <Link to={`/details/${movies.id}`}>
                                <img
                                    src={`${image_path}${movies.poster_path}`}
                                    alt={movies.title}
                                />
                            </Link>
                            <span>{movies.title}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
