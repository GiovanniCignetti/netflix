const Movies = (moviesObj) => {
  return (
    <div className="movies">
      {moviesObj.movies.map((elem, index) => {
        return <img src={elem} alt="movie" />;
      })}
    </div>
  );
};
export default Movies;
