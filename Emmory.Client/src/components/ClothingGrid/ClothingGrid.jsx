import ClothingCard from "../ClothingCard/ClothingCard";
import { hasCategory } from "../../constants/clothingCategories";
import "./ClothingGrid.css";

function ClothingGrid({items, selectedCategory}){
    const filteredItems = selectedCategory === 0? items : items.filter(item => hasCategory(item.category, selectedCategory));

    return (
        <div className="grid">
            {filteredItems.map(item => 
                <ClothingCard key = {item.id} item = {item}/>
            )}
        </div>
    )
}

export default ClothingGrid;