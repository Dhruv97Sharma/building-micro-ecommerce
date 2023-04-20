import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

const CreateProductForm = () => {
    const [productData, setProductData] = useState({
        name: "",
        handle: "",
        price: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData((prevProductData) => ({
            ...prevProductData,
            [name]: value,
        }))
        console.log("product data:", productData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(productData)
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="name"
                    value="product name"
                />
                </div>
                <TextInput
                name="name"
                id="name"
                type="name"
                placeholder="Book"
                required={true}
                value={productData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="handle"
                    value="Product handle"
                />
                </div>
                <TextInput
                name="handle"
                id="handle"
                type="handle"
                placeholder="new-book"
                required={true}
                value={productData.handle}
                onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="price"
                    value="Product price"
                />
                </div>
                <TextInput
                name='price'
                id="price"
                type="price"
                placeholder="new-book"
                required={true}
                value={productData.price}
                onChange={handleChange}
                />
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}

export default CreateProductForm