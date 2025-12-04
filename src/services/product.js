const BASE_URL = "https://692ecad891e00bafccd556f0.mockapi.io/products"

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(product)
    })

    if(!res.ok){
        throw new Error("No se pudo crear el producto");
    }
    const result = await res.json();
    return result;
       
}

export const getProducts =async (category) =>{
    let url=BASE_URL;
    if (category){
        url = `${BASE_URL}?category=${category}`;
        }

        const res = await fetch(url);
        if(!res.ok){
            throw new Error ("Error al listar los productos")
        }

        const results = await res.json();
        return results
}
export const getProductById = async (id) =>{
    const res = await fetch(`https://692ecad891e00bafccd556f0.mockapi.io/products/${id}`)
    if(!res.ok){
        throw new Error ("Error al obtener el producto")
    }
    return await res.json()
}