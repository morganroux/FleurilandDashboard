import { Order } from "../../types/woocommerce.d";

export type Sorter = (elmt1: Order, elmt2: Order) => number

export const sortById: Sorter = (elmt1, elmt2) => elmt1.id <= elmt2.id ? -1 : 1;

export const sortByName: Sorter = (elmt1, elmt2) => {
    const firstName1 = elmt1.billing.first_name.charAt(0).toUpperCase() + elmt1.billing.first_name.slice(1).toLowerCase();
    const lastName1 = elmt1.billing.last_name.charAt(0).toUpperCase() + elmt1.billing.last_name.slice(1).toLowerCase();
    const firstName2 = elmt2.billing.first_name.charAt(0).toUpperCase() + elmt2.billing.first_name.slice(1).toLowerCase();
    const lastName2 = elmt2.billing.last_name.charAt(0).toUpperCase() + elmt2.billing.last_name.slice(1).toLowerCase();
    
    if (lastName1 != lastName2) {
        return (lastName1 <= lastName2 ? -1 : 1);
    }
    else 
        return (firstName1 <= firstName2 ? -1 : 1);
}

export const sortByTotal: Sorter = (elmt1, elmt2) => parseFloat(elmt1.total) <= parseFloat(elmt2.total) ? -1 : 1;

export const sortByStatus: Sorter = (elmt1, elmt2) => elmt1.status <= elmt2.status ? -1 : 1;

export const sortByDate: Sorter = (elmt1, elmt2) => elmt1.date_created <= elmt2.date_created ? -1 : 1;

export const sortByCity: Sorter = (elmt1, elmt2) => elmt1.shipping.city.toLowerCase() <= elmt2.shipping.city.toLowerCase() ? -1 : 1;

export const sortByMethod: Sorter = (elmt1, elmt2) => {
    const method1 = elmt1.shipping_lines[0] ? elmt1.shipping_lines[0].method_title : 'Aucune méthode renseignée';
    const method2 = elmt2.shipping_lines[0] ? elmt2.shipping_lines[0].method_title : 'Aucune méthode renseignée';
    return (method1 <= method2 ? -1 : 1);
}