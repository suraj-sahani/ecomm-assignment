export interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    rating: number
    brand: string
    thumbnail: string
}

export interface Category {
    slug: string
    name: string
}