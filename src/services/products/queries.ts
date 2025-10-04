import { useQuery } from "@tanstack/react-query";
import { GetAllProducts,GetSingleProduct } from "../AllApi";
import type { PaginationProductResponse } from "@/types/ProductType";
import type { ProductType } from "@/types/ProductType";




// Get All Products
export const useGetAllProducts = (page: number) => {

    return useQuery<PaginationProductResponse>({

        queryKey: ["products", page],
        queryFn: async () => {

            const headers = { "ngrok-skip-browser-warning": "true" }

            return await GetAllProducts(page, headers) as PaginationProductResponse

        },
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 2,

    });

}



// Get Single Product
export const useGetSingleProduct = (id: string) => {

    return useQuery<ProductType>({

        queryKey: ["products", id],
        queryFn: async () => {

            const headers = { "ngrok-skip-browser-warning": "true" }

            return await GetSingleProduct(id, headers) as ProductType

        },
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 2,

    });

}