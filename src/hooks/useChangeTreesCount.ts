import { useState } from "react";

const useChangeTreesCount = () => {
  const [treesCount, setTreesCount] = useState(1);

  const increaseTreesCount = () => {
    setTreesCount((prevState) => prevState + 1);
  };

  const decreaseTreesCount = () => {
    setTreesCount((prevState) => prevState - 1);
  };

  return { treesCount, increaseTreesCount, decreaseTreesCount };
};

export default useChangeTreesCount;
