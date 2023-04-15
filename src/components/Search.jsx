import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  constructor(props) {
    super(props);
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
    this.setState({ type: e.target.dataset.type });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="row type-search">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="episode"
              onChange={this.handleFilter}
              checked={this.state.type === "episode"}
            />
            <span>Episode</span>
          </label>
        </div>
      </>
    );
  }
}
