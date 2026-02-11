import { ClothingCategory, ClothingCategoryLabels } from "../../constants/clothingCategories";
import "./FormField.css";
import "./CategoryMultiSelect.css";

const OPTIONS = Object.entries(ClothingCategory)
  .filter(([, categoryValue]) => categoryValue !== ClothingCategory.None)
  .map(([key, categoryValue]) => ({
    key,
    value: categoryValue,
    label: ClothingCategoryLabels[categoryValue]
  }));

function hasCategory(value, categoryFlag) {
  return (value & categoryFlag) === categoryFlag;
}

function CategoryMultiSelect({ value, onChange, error }) {
  function toggle(categoryFlag) {
    const isSelected = hasCategory(value, categoryFlag);
    const nextValue = isSelected ? value & ~categoryFlag : value | categoryFlag;
    onChange(nextValue);
  }

  return (
    <div className="field">
      <p className="field-label">Category</p>
      <div className="category-options" role="group" aria-label="Clothing categories">
        {OPTIONS.map(option => {
          const selected = hasCategory(value, option.value);
          return (
            <label key={option.key} className={`category-option ${selected ? "selected" : ""}`}>
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggle(option.value)}
                aria-label={option.label}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default CategoryMultiSelect;
