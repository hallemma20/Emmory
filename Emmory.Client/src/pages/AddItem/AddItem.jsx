import { useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import { ClothingCategory } from "../../constants/clothingCategories";
import TextField from "../../components/FormFields/TextField";
import DateField from "../../components/FormFields/DateField";
import CategoryMultiSelect from "../../components/FormFields/CategoryMultiSelect";
import "./AddItem.css";

const INITIAL_FORM = {
  name: "",
  category: ClothingCategory.None,
  brand: "",
  colour: "",
  createdAt: ""
};

const API_PATH = "/api/clothing";

function buildApiUrl() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!baseUrl) {
    return API_PATH;
  }

  return `${baseUrl.replace(/\/$/, "")}${API_PATH}`;
}

function AddItem() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      form.brand.trim() &&
      form.colour.trim() &&
      form.category !== ClothingCategory.None
    );
  }, [form]);

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!form.brand.trim()) {
      nextErrors.brand = "Brand is required.";
    }
    if (!form.colour.trim()) {
      nextErrors.colour = "Colour is required.";
    }
    if (form.category === ClothingCategory.None) {
      nextErrors.category = "Select at least one category.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const payload = {
      Name: form.name.trim(),
      Category: form.category,
      Brand: form.brand.trim(),
      Colour: form.colour.trim(),
      CreatedAt: form.createdAt ? new Date(form.createdAt).toISOString() : null
    };

    try {
      const response = await fetch(buildApiUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      setStatus({ type: "success", message: "Item added to your wardrobe." });
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: `Unable to add item. ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="add-item-page">
        <section className="add-item-panel">
          <h2>Add Clothing Item</h2>
          <p>Create a new wardrobe item using the details below.</p>

          <form className="add-item-form" onSubmit={handleSubmit} noValidate>
            <TextField
              id="name"
              label="Name"
              value={form.name}
              onChange={value => updateField("name", value)}
              error={errors.name}
              required
            />

            <CategoryMultiSelect
              value={form.category}
              onChange={value => updateField("category", value)}
              error={errors.category}
            />

            <TextField
              id="brand"
              label="Brand"
              value={form.brand}
              onChange={value => updateField("brand", value)}
              error={errors.brand}
              required
            />

            <TextField
              id="colour"
              label="Colour"
              value={form.colour}
              onChange={value => updateField("colour", value)}
              error={errors.colour}
              required
            />

            <DateField
              id="createdAt"
              label="Created At"
              value={form.createdAt}
              onChange={value => updateField("createdAt", value)}
              hint="Optional. If empty, backend defaults can apply."
            />

            {status.message ? (
              <p className={`status-message ${status.type}`}>{status.message}</p>
            ) : null}

            <button className="submit-button" type="submit" disabled={!canSubmit || isSubmitting}>
              {isSubmitting ? "Saving..." : "Add Item"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddItem;
