import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const GET_MOVIE = gql`
    query getMovie($id: Int!) {
      movie(id: $id) {
        id
        title
        medium_cover_image
        language
        rating
        description_intro
        isLiked @client
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
  return (
    <div className="w-full h-screen flex justify-around items-center text-white bg-gradient-to-br from-purple-500 to-pink-500">
      {loading ? (
        <h1 className="text-6xl">Loading...</h1>
      ) : (
        <>
          <div className="w-1/2 ml-2">
            <h1 className="text-6xl mb-4">
              {data.movie.title} {data.movie.isLiked ? "❤" : "🤍"}
            </h1>
            <h4 className="text-4xl mb-3">
              {data.movie.language} | {data.movie.rating}
            </h4>
            <p className="text-3xl">{data.movie.description_intro}</p>
          </div>
          <img
            src={data.movie.medium_cover_image}
            alt="poster"
            className="aspect-[2/3] h-3/5 "
          />
        </>
      )}
    </div>
  );
};
export default Detail;
