import { useState } from "react";
import "./styles.css";

type FormData = {
    minPrice: number,
    maxPrice: number
}

type Props = {
    onFilter: Function
}

export default function Filter({ onFilter }: Props) {
    const [formData, setFormData] = useState<FormData>({
        minPrice: 0,
        maxPrice: Number.MAX_VALUE
    });

    function handleInputChange(event: any) {
        const element = event.target.name;
        const value = event.target.value;

        if (value === "")
            if (element === "minPrice")
                setFormData({ ...formData, [element]: 0 });
            else if (element === "maxPrice")
                setFormData({ ...formData, [element]: Number.MAX_VALUE });
            else
                return;
        else
            setFormData({ ...formData, [element]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.minPrice, formData.maxPrice);
    }

    return (
        <section id="filter-section" className="ds-container ds-filter-card">
            <form id="filter-frm" onSubmit={handleSubmit}>
                <input id="min-price" name="minPrice" type="text" placeholder="Preço mínimo"
                    value={formData.minPrice || ""} onChange={handleInputChange} />
                <input id="max-price" name="maxPrice" type="text" placeholder="Preço máximo"
                    value={(formData.maxPrice === Number.MAX_VALUE || !formData.maxPrice) ? "" : formData.maxPrice}
                    onChange={handleInputChange} />
                <input type="submit" value="Filtrar" />
            </form>
        </section>
    )
}