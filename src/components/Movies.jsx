import React from "react";
import Movie from "./Movie";
import styles from "./Movies.module.css";

function Movies(props) {
  const { movies } = props;
  return (
    <section className={styles.movies}>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </section>
  );
}

export default Movies;
