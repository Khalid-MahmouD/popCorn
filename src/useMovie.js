import { useState, useEffect } from "react";
const KEY = "c2e3ea52";

export function useMovie(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        function () {
            const controller = new AbortController();

            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");
                    const res = await fetch(
                        `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );

                    if (!res.ok)
                        throw new Error("Something went wrong with fetching movies");
                    const data = await res.json();
                    if (data.Response === "False") throw new Error("Movie not Found");

                    setMovies(data.Search);
                    setError("");

                    // Call the callback after successfully fetching movies
                    // if (callback) callback();
                } catch (error) {
                    if (error.name === "AbortError") {
                        console.log("Request was aborted");
                    }
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            }

            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }

            fetchMovies();

            return () => controller.abort();
        },
        [query] // Safe because `callback` is memoized.
    );

    return { movies, isLoading, error }
}