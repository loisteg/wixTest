import { Category } from "../commonTypes";

export interface CategoryTreeProps {
  id: number;
}

export interface CategoryProps {
  category: Category;
  onAddSubcategory: (parentId: Category["id"], name: Category["name"]) => void;
  onRenameCategory: (id: Category["id"], newName: string) => void;
  onDeleteCategory: (id: Category["id"]) => void;
}
