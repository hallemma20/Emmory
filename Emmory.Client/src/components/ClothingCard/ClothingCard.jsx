import { getCategories } from "../../constants/clothingCategories";
import "./ClothingCard.css";

function ClothingCard({item}){
    const categories = getCategories(item.category);

    return(
        <div className="card">
            <div className="image-placeholder"/>

            <h3>{item.name}</h3>
            <p className="brand">{item.brand}</p>

            <div className="badges">
                {categories.map(c =>(
                    <span key={c.value} className="badge">{c.lable}</span>
                ))}
            </div>

            <p className="colour">{item.colour}</p>
        </div>
    );
}

export default ClothingCard;