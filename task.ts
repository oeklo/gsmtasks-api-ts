export interface Contact {
    name: string;
    company: string;
    phone: string;
    email: string;
    notes: string;
}

export interface Location {
    type: "Point";
    coordinates: [number, number];
}

export interface Address {
    raw_address: string;
    formatted_address: string;
    location: Location;
    google_place_id: string;
    point_of_interest: string;
    street: string;
    house_number: string;
    apartment_number: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    country_code: string;
}

export type TaskState = 'unassigned' | 'assigned' | 'accepted' | 'transit' | 'active' | 'completed' | 'Failed' | 'Cancelled';

export interface Task<MetaFieldsType> {
    id?: string;
    url?: string;
    account: string;
    order?: string;
    external_id?: string;
    receiver?: string;
    contact?: Partial<Contact>;
    address: Partial<Address>;
    description: string;
    reference?: string;
    complete_after?: Date;
    complete_before?: Date;
    scheduled_time?: Date;
    assignee?: string;
    auto_assign?: boolean;
    assignee_proximity?: string;
    duration?: string | number;
    metafields?: Partial<MetaFieldsType>;
}
