import { ClothingCategory, ClothingCategoryLabels } from "../../constants/clothingCategories";
import "../FormFields/CategoryMultiSelect.css";
import "./CategoryFilters.css";

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

function CategoryFilters({ selectedCategoryMask, onCategoryChange }) {
  function toggle(categoryFlag) {
    const isSelected = hasCategory(selectedCategoryMask, categoryFlag);
    const nextValue = isSelected
      ? selectedCategoryMask & ~categoryFlag
      : selectedCategoryMask | categoryFlag;

    onCategoryChange(nextValue);
  }

  return (
    <div className="filters" role="group" aria-label="Filter by category">
      {OPTIONS.map(option => {
        const selected = hasCategory(selectedCategoryMask, option.value);

        return (
          <button
            key={option.key}
            type="button"
            className={`category-option ${selected ? "selected" : ""}`}
            onClick={() => toggle(option.value)}
            aria-pressed={selected}
          >
            {option.label}
          </button>
        );
      })}

      {selectedCategoryMask !== ClothingCategory.None ? (
        <button
          type="button"
          className="clear-filters"
          onClick={() => onCategoryChange(ClothingCategory.None)}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}

export default CategoryFilters;
