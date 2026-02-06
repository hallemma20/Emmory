import { ClothingCategory, ClothingCategoryLabels } from "../../constants/clothingCategories";
import "./CategoryFilters.css";

function CategoryFilters({selectedCategory, onCategoryChange}){
    return(
        <div className="filters">
            {Object.entries(ClothingCategory)
            .filter(([value]) => value != 0)
            .map(([key, value]) => (
                <button key={key} className={selectedCategory === value ? 0 : value} onClick={() => onCategoryChange(selectedCategory === value ? 0 : value)}>
                    {ClothingCategoryLabels[value]}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilters;