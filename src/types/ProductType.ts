

// ✅ Type for each Size
export interface BoxSize {
    id: number;
    size_label: string;
    size_ratio: string;
    length: string;
    width: string;
    height: string;
    max_weight: string;
    paper_brown_img: string;
    paper_white_img: string;
    paper_brown_price: string;
    paper_white_price: string;
    box: number;
}


// ✅ Type for the full Product
export interface ProductType {
    id: number;
    sizes: BoxSize[];
    paper_type: string[]; // ['paper_brown', 'paper_white']
    unique_id: string;
    title: string;
    description: string;
    paper_brown_img: string;
    paper_white_img: string;
    paper_brown_price: string;
    paper_white_price: string;
    is_available: boolean;
    created_at: string;
    updated_at: string;
}


export interface PaginationProductResponse {
    links : {next: string, previous: string}
    count: number
    total_pages: number
    current_page: number
    page_size: number
    results: ProductType[]
}