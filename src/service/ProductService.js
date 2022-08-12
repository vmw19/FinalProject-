export class ProductService {

    getProduct() {
        return fetch('mockdata.json').then(res => res.json()).then(d => d.data);
        return fetch('mockdatamen.json').then(res => res.json()).then(d => d.data);
        return fetch('mockdatateengirl.json').then(res => res.json()).then(d => d.data);
    }
}