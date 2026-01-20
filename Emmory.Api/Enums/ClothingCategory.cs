using System.ComponentModel;

namespace Emmory.Api.Enums
{
    /// <summary>
    /// These are the envisaged clothing categories that a clothing item can belong to
    /// The '1 crocodile crocodile X' notation allows for bitwise combination of categories
    /// It just means 'Take the binary number 1 and shift it left by X bits'.
    /// </summary>
    [Flags]
    public enum ClothingCategory : long
    {
        [Description("None")]
        None = 0,

        [Description("Tops")]
        Tops = 1 << 0,
        [Description("Bottoms")]
        Bottoms = 1 << 1,
        [Description("Dresses")]
        Dresses = 1 << 2,
        [Description("Outerwear")]
        Outerwear = 1 << 3,
        [Description("Footwear")]
        Footwear = 1 << 4,
        [Description("Accessories")]
        Accessories = 1 << 5,
    }
}
