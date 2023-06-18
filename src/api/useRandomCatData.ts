import { useInfiniteQuery } from "react-query";
import { api } from "../core/api";
import { getRandomCatsDto } from "./dto/GetRandomCats";

interface GetRandomCatsParams {
  pageParam: number;
  breedId?: string | null;
}

const getRandomCats = async ({ pageParam, breedId }: GetRandomCatsParams) => {
  const { data } = await api.get<getRandomCatsDto>(
    "https://api.thecatapi.com/v1/images/search",
    {
      params: {
        limit: 10,
        pageParam,
        breed_ids: breedId,
      },
    }
  );

  return data;
};

interface UseRandomCatDataParams {
  breedId?: string | null;
}

export const useRandomCatData = ({ breedId }: UseRandomCatDataParams = {}) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      `getRandomCats-${breedId || "random"}`,
      ({ pageParam }) => getRandomCats({ pageParam, breedId }),
      {
        getNextPageParam: () => Date.now(),
      }
    );

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  };
};
