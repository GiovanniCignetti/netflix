import data from "../data/movies.json";
import Category from "../components/Category.js";
import Movies from "../components/Movies.js";

const Container = () => {
  return (
    <div className="container">
      {data.map((elem, index) => {
        // console.log(index);
        return (
          <>
            <Category category={elem.category} key={index} />
            <Movies movies={elem.images} />
          </>
        );
      })}
    </div>
  );
};

export default Container;
