import { Carousel, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRandomCatData } from "../api/useRandomCatData";
import { filterSearchParams } from "../utils/searchParams";

export const BreedModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpened, setIsOpened] = useState(false);
  const breed = searchParams.get("breed");
  const { data, isLoading } = useRandomCatData({ breedId: breed });

  useEffect(() => {
    setIsOpened(!!breed);
  }, [breed]);

  const closeModal = () => {
    const paramsObject = filterSearchParams(searchParams, "breed");

    setSearchParams(paramsObject);
  };

  const handleImgClick = (catId: string) => {
    setSearchParams((prev) => ({
      ...prev,
      cat: catId,
    }));
  };

  return (
    <Modal show={isOpened} onClose={closeModal}>
      <Modal.Header>
        {isLoading
          ? "Loading..."
          : data?.pages[0][0].breeds.map((b) => b.name).join(",") ||
            "Cute kitty"}
      </Modal.Header>
      <Modal.Body>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {data?.pages.map((page) => {
              return page.map((cat) => (
                <img
                  src={cat.url}
                  alt={cat.id}
                  key={cat.id}
                  onClick={() => handleImgClick(cat.id)}
                />
              ));
            })}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
};
