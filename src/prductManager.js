class ProductManager {
    constructor() {
        this.products = [
            {name: `coca cola`,
            description: `La mejor gaseosa cola del mercado`,
            price: 110,
            thumbnail: `foto`,
            code: `cjdgjdk`,
            stock: 10},
            {name: `pepsi`,
            description:`Igual que la coca pero peor`,
            price: 90,
            thumbnail: `foto`,
            code: `cjdsdfk`,
            stock: 10}
        ];
        this.path = ``;
    };

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const productById = this.products.find((product) => product.id === id);
        if (!productById) {
            throw new Error (`Not found`)
        }
        return console.log(productById);
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.products.length + 1;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code, 
            stock,
        };
        const productExist = this.products.find((product) => product.code === code);
        if (!!productExist){
            throw new Error (`El producto con codigo: ${product.code} ya existe`);
        }
        this.products.push(product);
        return productExist;
    };
    
    updateProduct(id, title, description, price, thumbnail, code, stock) {
        const productForUpdate = this.products.find((product) => product.id === id);
        if(!productForUpdate){
            throw new Error(`El producto no existe`)
        }
        const index = this.products.indexOf(productForUpdate);
        this.products.splice(index, 1);
        const updateProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code, 
            stock,
        };
        this.products.push(updateProduct);
        return updateProduct;
    }
    
    deleteProduct(id) {
        const productToDeleted = this.products.find((product) => product.id === id);
        if(!productToDeleted){
            throw new Error(`El producto no existe`)
        }
        const index = this.products.indexOf(productToDeleted);
        this.products.splice(index, 1);
    }
        
    
};

const productManager = new ProductManager()

export {getProducts , getProductsById};
// productManager.addProduct(`coca cola`, `La mejor gaseosa cola del mercado`, 110, `foto`, `cjdgjdk`, 10);
// //console.log(productManager.getProducts())
// // console.log(`================================================================`)
// // productManager.addProduct(`coca cola`, `La mejor gaseosa cola del mercado`, 110, `foto`, `cjdgjdk`, 10);
// // console.log(productManager.getProducts())
// //console.log(`================================================================`)
// productManager.addProduct(`pepsi`, `Igual que la coca pero peor`, 90, `foto`, `cjdgjk`, 10);
// console.log(productManager.getProducts())
// console.log(`================================================================`)
// // productManager.getProductsById(1)

// productManager.updateProduct(1, `coca cola zero`, `La mejor gaseosa cola sin azucar`, 110, `foto`, `cjdgjdk,`, 10);
// productManager.deleteProduct(2)
// console.log(productManager.getProducts())