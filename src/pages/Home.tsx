import { useRandomCatData } from "../api/useRandomCatData";
import { CatCard } from "../components/CatCard";
import Button from "../components/Button";

const HomePage = () => {
  const { isLoading, isError, data, fetchNextPage, isFetchingNextPage } =
    useRandomCatData();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Oops, smth went wrong</span>;
  }

  if (!data) {
    return <div>No cats yet...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {data.pages.map((page) => {
          return page.map((item) => (
            <CatCard
              key={item.id}
              image={item.url}
              catId={item.id}
              name={item.breeds.map((b) => b.name).join(",") || "Funny cats"}
            />
          ));
        })}
      </div>
      <div className="text-center">
        <Button onClick={() => fetchNextPage()} isLoading={isFetchingNextPage}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
