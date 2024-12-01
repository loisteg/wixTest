import { Button, Typography } from "@mui/material";
import { Category } from "./Category";

import { useControlCategoriesTrees } from "../hooks";

import { FC } from "react";

export const CategoryTree: FC<{ id: number }> = ({ id }) => {
  const {
    categories,
    handleAddCategory,
    handleAddSubcategory,
    handleRenameCategory,
    handleDeleteCategory,
  } = useControlCategoriesTrees();

  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Category Tree {id}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddCategory}>
        Add Category
      </Button>

      <div style={{ marginTop: "1rem" }}>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onAddSubcategory={handleAddSubcategory}
            onRenameCategory={handleRenameCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        ))}
      </div>
    </div>
  );
};
