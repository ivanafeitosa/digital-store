import { useQuery, useMutation } from "@tanstack/react-query";
import { API, queryClient } from "../services";

export const useBuscarCategorias = () => {
    return useQuery({
        queryKey: ['buscar-categorias'],
        queryFn: async () => {
            const request = await API.get('categorias');
            return request.data;
        } 
    });
}

export const useCriarCategoria = () => {
    return useMutation({
        mutationFn: async (data) =>{
            const request = await API.post('categorias', data);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-categorias']
            });
        }
    });
}

export const useEditarCategoria = () => {
    return useMutation({
        mutationFn: async (data) =>{
            const request = await API.put(`categorias/${data.id}`, data);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-categorias']
            });
        }
    });
}

export const useDeletarCategoria = () => {
    return useMutation({
        mutationFn: async (id) =>{
            const request = await API.delete(`categorias/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-categorias']
            });
        }
    });
}