import React from "react";
import Movie from "../components/Movie";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location;
    const { path } = this.props.match;
    if (state) {
      return (
        <div className="detail__container">
          <Movie
            key={state.id}
            id={state.id}
            year={state.year}
            title={state.title}
            summary={state.summary}
            poster={state.poster}
            genres={state.genres}
            path={path}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
