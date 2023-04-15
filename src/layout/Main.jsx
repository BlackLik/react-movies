import React, { Component } from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_API_OMDB;

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (query, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search, loading: false });
        } else {
          this.setState({ movies: [], loading: false });
        }
      })
      .catch((err) => {
        this.setState({ movies: [], loading: false });
        console.log(err);
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <section>
          <Search searchMovies={this.searchMovies} />
          {!this.state.loading ? (
            movies.length > 0 ? (
              <Movies movies={movies} />
            ) : (
              <h4>Not found</h4>
            )
          ) : (
            <Loader />
          )}
        </section>
      </main>
    );
  }
}
