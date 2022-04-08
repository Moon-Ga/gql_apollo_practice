import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const GET_MOVIE = gql`
    query getMovie($id: Int!) {
      movie(id: $id) {
        title
        medium_cover_image
        language
        rating
        description_intro
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
  return <div className="w-full h-96 rounded-md">{id}</div>;
};
export default Detail;
