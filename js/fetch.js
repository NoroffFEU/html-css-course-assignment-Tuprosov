async function fetchData(url) {
    try {
        const data = await fetch(url);
	    const json = await data.json();
	    return json;
    } catch (error) {
        alert('Error displaying data:', error);
    }    
}

async function getAllProducts(){
    const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';
    const products  = await fetchData(apiUrl)
    return products
}

export const allProducts = await getAllProducts();
export const menProducts = allProducts.filter(item => item.gender.toLowerCase() === 'male')
export const womenProducts = allProducts.filter(item => item.gender.toLowerCase() === 'female')



