import { IconButton, TextField, Button, Typography, Box } from "@mui/material";
import { Delete, Add, Edit } from "@mui/icons-material";

import { useControlCategory } from "../hooks";

import { FC } from "react";
import { CategoryProps } from "../types/uiTypes/categoryTypes";

export const Category: FC<CategoryProps> = (props) => {
  const {
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
  } = useControlCategory(props);

  return (
    <Box ml={4}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="subtitle1"
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={toggleIsExpanded}
        >
          {isExpanded ? "▼" : "▶"} {props.category.name}
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
                toggleIsRenaming();
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <IconButton size="small" onClick={toggleIsRenaming}>
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
            {props.category.children.map((child) => (
              <Category
                key={child.id}
                category={child}
                onAddSubcategory={props.onAddSubcategory}
                onRenameCategory={props.onRenameCategory}
                onDeleteCategory={props.onDeleteCategory}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
