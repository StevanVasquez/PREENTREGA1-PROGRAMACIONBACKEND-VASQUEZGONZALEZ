import express from "express";
import productoRouter from "./routers/producto.router.js";
import carritoRouter from "./routers/carrito.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productoRouter);
app.use("/api/carts", carritoRouter);


app.listen(8080, () => console.log('Running on port 8080'));