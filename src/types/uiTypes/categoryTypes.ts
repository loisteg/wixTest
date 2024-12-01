import { Category } from "../commonTypes";

export interface CategoryProps {
  category: Category;
  onAddSubcategory: (parentId: string, name: string) => void;
  onRenameCategory: (id: string, newName: string) => void;
  onDeleteCategory: (id: string) => void;
}
