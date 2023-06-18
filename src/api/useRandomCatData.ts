import { useInfiniteQuery, useQuery } from "react-query";
import { api } from "../core/api";
import { getRandomCatsDto } from "./dto/GetRandomCats";

const getRandomCats = async ({ pageParam = 0 }) => {
  const { data } = await api.get<getRandomCatsDto>(
    "https://api.thecatapi.com/v1/images/search",
    {
      params: {
        limit: 10,
        pageParam,
      },
    }
  );
  return data;
};

export const useRandomCatData = () => {
  const { isLoading, isError, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "randomCats",
    getRandomCats,
    {
      getNextPageParam: () => Date.now(),
    }
  );

  return { isLoading, isError, data, fetchNextPage, isFetchingNextPage };
};
