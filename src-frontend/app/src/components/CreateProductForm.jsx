import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const CreateProductForm = () => {
    const navigate = useNavigate()
    const [productData, setProductData] = useState({
        name: "",
        handle: "",
        price: "",
        image: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData((prevProductData) => ({
            ...prevProductData,
            [name]: value,
        }))
        console.log("product data:", productData)
    }

    const handleImageUpload = (event) => {
        setProductData((prevProductData) => ({
            ...prevProductData,
            image: event.target.files[0],
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(productData)
        let formData = new FormData()
        formData.append('image', productData.image, productData.image.name)
        formData.append('name', productData.name)
        formData.append('handle', productData.handle)
        formData.append('price', productData.price)
        const baseAPIURL = "http://localhost:8000"
        const url = `${baseAPIURL}/api/products/`
        const headers = {
            'content-type': 'multipart/form-data',
        }
        axios.post(url, formData, { headers: headers })
        .then((res) => {
            console.log(res.data)
            navigate('/products')
        })
        .catch((err) => console.log(err))
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
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" accept="image/png, image/jpeg" class="hidden"
                    onChange={handleImageUpload}
                    />
                </label>
            </div> 
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}

export default CreateProductForm