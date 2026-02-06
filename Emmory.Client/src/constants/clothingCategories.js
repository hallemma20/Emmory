export const ClothingCategory = Object.freeze({
  None: 0,

  Tops: 1 << 0,
  Bottoms: 1 << 1,
  Dresses: 1 << 2,
  Outerwear: 1 << 3,
  Footwear: 1 << 4,
  Accessories: 1 << 5,

  Shorts: 1 << 6,
  Skirts: 1 << 7,
  Activewear: 1 << 8,
  Sleepwear: 1 << 9,
  Swimwear: 1 << 10,
  Formalwear: 1 << 11
});

export const ClothingCategoryLabels = {
  [ClothingCategory.None]: "None",
  [ClothingCategory.Tops]: "Tops",
  [ClothingCategory.Bottoms]: "Bottoms",
  [ClothingCategory.Dresses]: "Dresses",
  [ClothingCategory.Outerwear]: "Outerwear",
  [ClothingCategory.Footwear]: "Footwear",
  [ClothingCategory.Accessories]: "Accessories",
  [ClothingCategory.Shorts]: "Shorts",
  [ClothingCategory.Skirts]: "Skirts",
  [ClothingCategory.Activewear]: "Activewear",
  [ClothingCategory.Sleepwear]: "Sleepwear",
  [ClothingCategory.Swimwear]: "Swimwear",
  [ClothingCategory.Formalwear]: "Formalwear"
};

export function hasCategory(categoryValue, flag) {
  return (categoryValue & flag) === flag;
}

export function getCategories(categoryValue) {
  return Object.values(ClothingCategory)
    .filter(v => v !== ClothingCategory.None)
    .filter(flag => hasCategory(categoryValue, flag))
    .map(flag => ({
      value: flag,
      label: ClothingCategoryLabels[flag]
    }));
}
