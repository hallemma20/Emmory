import { useState } from "react";
import Header from "../../components/Header/Header";
import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";
import ClothingGrid from "../../components/ClothingGrid/ClothingGrid";
import ClothingData from "../../data/clothingData.json";
import "./Wardrobe.css";

function Wardrobe(){
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <>
            <Header/>
            <main className="wardrobe">
                <CategoryFilters selectedCategory = {selectedCategory} onCategoryChange = {setSelectedCategory}/>
                <ClothingGrid items = {ClothingData} selectedCategory = {selectedCategory}/>
            </main>
        </>
    )
}

export default Wardrobe;