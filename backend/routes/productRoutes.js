import express from "express";
import { addProduct, getProduct, getProducts, removeProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router()

productRouter.get('/list', getProducts)
productRouter.get('/single/:id', getProduct)
productRouter.get('/remove/:id', adminAuth, removeProduct)
productRouter.post('/add', adminAuth, upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct)



export default productRouter