import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

export const API = axios.create({
    baseURL: 'http://localhost:3000/'
});

export const queryClient = new QueryClient();