import FSDao from"./fs.dao.js";
const path = "./products.json";

export default class ProductDaoFS extends FSDao {
    constructor() {
        super(path)
    }
}