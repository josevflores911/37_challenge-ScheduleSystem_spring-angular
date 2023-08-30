export interface Customer {
    id?: number;
    name?: string;
    date?: string | Date;    
    country?: Country;    
    representative?: Representative;    
    balance?: number;
    status?: string;
}

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}
