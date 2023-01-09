import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            Detail
        </div>
    );
};

export default Detail;