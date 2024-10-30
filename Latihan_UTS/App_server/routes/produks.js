const express = require ("express");
const router = express.Router();
const controllerProduk = require("../controllers/controllerProduk");
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongggodb 
router.get("/produk", controllerProduk.produkIndex);
router.post("/tambah", controllerProduk.produkInsert);
module.exports= router;