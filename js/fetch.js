let allProducts

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
    if(!allProducts) {
        const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';
        allProducts  = await fetchData(apiUrl)
    }
}

await getAllProducts();
export {allProducts}
export const menProducts = allProducts.filter(item => item.gender.toLowerCase() === 'male')
export const womenProducts = allProducts.filter(item => item.gender.toLowerCase() === 'female')




