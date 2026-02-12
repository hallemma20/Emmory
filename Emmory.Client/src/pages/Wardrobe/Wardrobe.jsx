import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";
import ClothingGrid from "../../components/ClothingGrid/ClothingGrid";
import "./Wardrobe.css";

const API_PATH = "/api/clothing";

function buildApiUrl() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!baseUrl) {
    return API_PATH;
  }

  return `${baseUrl.replace(/\/$/, "")}${API_PATH}`;
}

function Wardrobe(){
    const [selectedCategoryMask, setSelectedCategoryMask] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function loadItems() {
            try {
                const response = await fetch(buildApiUrl());
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}.`);
                }

                const data = await response.json();
                if (isActive) {
                    setItems(Array.isArray(data) ? data : []);
                }
            } catch {
                if (isActive) {
                    setItems([]);
                }
            }
        }

        loadItems();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <>
            <Header/>
            <main className="wardrobe">
                <CategoryFilters selectedCategoryMask = {selectedCategoryMask} onCategoryChange = {setSelectedCategoryMask}/>
                <ClothingGrid items = {items} selectedCategoryMask = {selectedCategoryMask}/>
            </main>
        </>
    )
}

export default Wardrobe;
