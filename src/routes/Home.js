import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";

const Home = () => {
  const GET_MOVIES = gql`
    {
      movies {
        id
        medium_cover_image
      }
    }
  `;

  const { data, loading } = useQuery(GET_MOVIES);

  return (
    <div className="w-full flex flex-col items-center ">
      <header className="w-full h-[20vh] text-white flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 ">
        <h1 className=" text-6xl font-semibold mb-5">Moon-Ga's Movie List</h1>
        <h2 className="text-4xl">with Apollo</h2>
      </header>
      {loading && (
        <div className="text-lg opacity-50 font-medium mt-3">Loading...</div>
      )}
      <main className="grid grid-cols-4 gap-6 w-3/5 relative">
        {data?.movies?.map((movie, idx) => (
          <Movie key={idx} id={movie.id} />
        ))}
      </main>
    </div>
  );
};
export default Home;
