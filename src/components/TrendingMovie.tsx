import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Movie {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
}

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const TrendingMovie: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: API_TOKEN
                }
            };

            try {
                const response = await axios.get(API_URL, options);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="align-center p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Trending Video</h1>
            <div className="flex overflow-x-scroll space-x-4">
                {movies.map(movie => (
                    <div key={movie.id} className="min-w-[200px] bg-white shadow-md rounded-lg p-4">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-40 object-cover rounded-md mb-2" />
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                        <p className="text-gray-600">Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingMovie;
