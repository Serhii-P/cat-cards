import { useBreedData } from "../api/useBreedData";
import { useSearchParams } from "react-router-dom";
import { Button } from "flowbite-react";

const Breed = () => {
  const { data, isLoading } = useBreedData();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleBreedButton = (breedId: string) => {
    setSearchParams((prev) => ({
      ...prev,
      breed: breedId,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No breeds :(</div>;
  }
  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-4">
        {data.map((breed) => (
          <Button key={breed.id} onClick={() => handleBreedButton(breed.id)}>
            {breed.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Breed;
