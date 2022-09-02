import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { APIKEY, image_path } from "../../config/key";
import { Container, Titulo } from "./styles";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        //Consumir api
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-br`
        )
            .then((response) => response.json())
            .then((data) => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                };
                setMovie(movie);
            });
    }, [id]);
    console.log(movie);
    return (
        <>
            <Titulo>{`${movie.title}`}</Titulo>
            <Container>
                <div className="movie">
                    <img src={movie.image} alt={`${movie.sinopse}`} />
                    <div className="detalhes">
                        <h1>{movie.title}</h1>
                        <span>{movie.sinopse}</span>
                        <span className="releaseDate">
                            Data de Lançamento: {movie.releaseDate}
                        </span>
                       <Link to="/"> <button>Voltar</button></Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Details;
