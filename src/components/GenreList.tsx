import { Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading}
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre: Genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
