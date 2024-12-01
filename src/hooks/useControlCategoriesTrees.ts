import { useState } from "react";

import { Category as CategoryType } from "../types/commonTypes";

const useControlCategoriesTrees = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const handleAddCategory = () => {
    const newCategory: CategoryType = {
      id: Date.now().toString(),
      name: `New Category ${categories.length + 1}`,
      children: [],
    };

    setCategories([...categories, newCategory]);
  };

  const handleAddSubcategory = (parentId: string, name: string) => {
    const newCategory: CategoryType = {
      id: Date.now().toString(),
      name,
      children: [],
    };

    setCategories((prevCategories) => {
      const updateCategory = (category: CategoryType): CategoryType => {
        if (category.id === parentId) {
          return {
            ...category,
            children: [...category.children, newCategory],
          };
        }
        return {
          ...category,
          children: category.children.map(updateCategory),
        };
      };

      return prevCategories.map(updateCategory);
    });
  };

  const handleRenameCategory = (id: string, newName: string) => {
    setCategories((prevCategories) => {
      const updateCategory = (category: CategoryType): CategoryType => {
        if (category.id === id) {
          return {
            ...category,
            name: newName,
          };
        }
        return {
          ...category,
          children: category.children.map(updateCategory),
        };
      };

      return prevCategories.map(updateCategory);
    });
  };

  const handleDeleteCategory = (id: string) => {
    setCategories((prevCategories) => {
      const filterCategory = (category: CategoryType): CategoryType | null => {
        if (category.id === id) {
          return null;
        }
        return {
          ...category,
          children: category.children
            .map(filterCategory)
            .filter((child): child is CategoryType => child !== null),
        };
      };

      return prevCategories
        .map(filterCategory)
        .filter((category): category is CategoryType => category !== null);
    });
  };

  return {
    categories,
    handleAddCategory,
    handleAddSubcategory,
    handleRenameCategory,
    handleDeleteCategory,
  };
};

export default useControlCategoriesTrees;
