import { useFavoriteData } from "../api/useFavorite";
import Button from "../components/Button";
import { CatCard } from "../components/CatCard";

export const FavoritePage = () => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useFavoriteData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No favorite cats :(</div>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {data.pages.map((page) => {
          return page.map((item) => (
            <CatCard
              key={item.id}
              image={item.image.url}
              name={"Cute cats"}
              catId={item.image.id}
            />
          ));
        })}
      </div>
      <div className="text-center">
        {data.pages[data.pages.length - 1].length === 10 && (
          <Button
            isLoading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};
