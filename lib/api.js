import { API_URL } from "constants/settings.js";

export function getStrapiURL(path = "") {
    // return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

export async function fetchAPI(path) {
    const response = await fetch(API_URL + path);
    if (response) {
        return await response.json();
    } else {
        // const statusCode = response.status > 200 ? response.status : false;
        // const statusText = response.statusText || false;
        // return { statusCode, statusText };
    }
    // if (data.errors) {
    //     console.error(data.errors);
    //     throw new Error("Failed to fetch API");
    // }
}
