import React, { useState } from "react";
import { Category as CategoryType } from "../types/Category";
import { IconButton, TextField, Button, Typography, Box } from "@mui/material";
import { Delete, Add, Edit } from "@mui/icons-material";

interface CategoryProps {
  category: CategoryType;
  onAddSubcategory: (parentId: string, name: string) => void;
  onRenameCategory: (id: string, newName: string) => void;
  onDeleteCategory: (id: string) => void;
}

export const Category: React.FC<CategoryProps> = ({
  category,
  onAddSubcategory,
  onRenameCategory,
  onDeleteCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(category.name);

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

  return (
    <Box ml={4}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="subtitle1"
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "▼" : "▶"} {category.name}
        </Typography>
        <IconButton
          size="small"
          color="secondary"
          onClick={handleDeleteCategory}
        >
          <Delete />
        </IconButton>
        {isRenaming ? (
          <>
            <TextField
              size="small"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                handleRenameCategory();
                setIsRenaming(false);
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <IconButton size="small" onClick={() => setIsRenaming(true)}>
            <Edit />
          </IconButton>
        )}
      </Box>
      {isExpanded && (
        <Box mt={2}>
          <Box display="flex" alignItems="center">
            <TextField
              size="small"
              value={newSubcategoryName}
              onChange={(e) => setNewSubcategoryName(e.target.value)}
            />
            <IconButton
              size="small"
              color="primary"
              onClick={handleAddSubcategory}
            >
              <Add />
            </IconButton>
          </Box>
          <Box mt={2}>
            {category.children.map((child) => (
              <Category
                key={child.id}
                category={child}
                onAddSubcategory={onAddSubcategory}
                onRenameCategory={onRenameCategory}
                onDeleteCategory={onDeleteCategory}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
