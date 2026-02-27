import { api } from "./axios"

export const getproducts = async () => {

    try {
        const response = await api.get("/products");
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.log("Error al consulta productos", error)
        return null;
    }


}

export const getproductdetail = async (id:number)=> {
    try {
        const response = await api.get(`/products/${id}`);
        console.log(response.data)
        return response.data;

    }catch (error){
        console.log("error al consultar un producto",error)
        return null;
    }

}