import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const Movie = ({ poster, id, isLiked }) => {
  const TOGGLE_LIKE = gql`
    mutation toggleLike($id: Int!) {
      toggleLike(id: $id) @client
    }
  `;

  const [toggleLike] = useMutation(TOGGLE_LIKE, {
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
      <button onClick={toggleLike}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default Movie;
