import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const Movie = ({ poster, id, isLiked }) => {
  const LIKE_MOVIE = gql`
    mutation likeMovie($id: Int!) {
      mutation
      likeMovie(id: $id) @client
    }
  `;

  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <div className="rounded-lg shadow-lg w-full ">
      <Link to={`/${id}`}>
        <img
          src={poster}
          alt="poster"
          className="w-full bg-cover bg-center rounded-lg"
        />
      </Link>
      <button onClick={isLiked ? null : likeMovie}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Movie;
