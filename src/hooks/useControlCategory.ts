import { useState } from "react";

import { CategoryProps } from "../types/uiTypes/categoryTypes";

const useControlCategory = ({
  category,
  onAddSubcategory,
  onRenameCategory,
  onDeleteCategory,
}: CategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(category.name);

  const toggleIsExpanded = () => {
    setIsExpanded((previosState) => !previosState);
  };

  const toggleIsRenaming = () => {
    setIsRenaming((previosState) => !previosState);
  };

  const handleAddSubcategory = () => {
    if (newSubcategoryName.trim() !== "") {
      onAddSubcategory(category.id, newSubcategoryName.trim());
      setNewSubcategoryName("");
    }
  };

  const handleRenameCategory = () => {
    if (newName.trim() !== "") {
      onRenameCategory(category.id, newName.trim());
    }
  };

  const handleDeleteCategory = () => {
    onDeleteCategory(category.id);
  };

  return {
    isExpanded,
    toggleIsExpanded,
    newSubcategoryName,
    setNewSubcategoryName,
    isRenaming,
    toggleIsRenaming,
    newName,
    setNewName,
    handleAddSubcategory,
    handleRenameCategory,
    handleDeleteCategory,
  };
};

export default useControlCategory;
