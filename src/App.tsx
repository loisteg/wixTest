import { Button } from "@mui/material";
import { CategoryTree } from "./components/CategoryTree";

import { useMemo } from "react";
import { useChangeTreesCount } from "./hooks";

import { FC } from "react";

export const App: FC = () => {
  const { treesCount, increaseTreesCount, decreaseTreesCount } =
    useChangeTreesCount();

  const TreesLayout = useMemo(() => {
    return (
      <div>
        {Array.from({ length: treesCount }, (_, index) => (
          <CategoryTree key={index} id={index} />
        ))}
      </div>
    );
  }, [treesCount]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ mr: 1 }}
        onClick={increaseTreesCount}
      >
        Add Tree
      </Button>
      <Button variant="contained" color="primary" onClick={decreaseTreesCount}>
        Remove Tree
      </Button>
      {TreesLayout}
    </>
  );
};
