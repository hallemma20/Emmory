import ClothingCard from "../ClothingCard/ClothingCard";
import { ClothingCategory } from "../../constants/clothingCategories";
import "./ClothingGrid.css";

function ClothingGrid({ items, selectedCategoryMask }){
    const filteredItems =
      selectedCategoryMask === ClothingCategory.None
        ? items
        : items.filter(item => (item.category & selectedCategoryMask) !== 0);

    return (
        <div className="grid">
            {filteredItems.map(item => 
                <ClothingCard key = {item.id} item = {item}/>
            )}
        </div>
    )
}

export default ClothingGrid;
