import express from 'express';
import Product from '../models/productModel';

//Defining router
const router = express.Router();

//GETS
router.get('/', async (req, res) => {
  const products = await Product.find({
    // find something
  })
  res.send(products);
});

//POSTS
router.post('/', async (req, res) => {
  const product = new Product ({
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countStock: req.body.countStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews
  });
  const newProduct = await product.save();
  if(newProduct) {
    return res.status(201).send({
      msg: 'New Product create!',
      data: newProduct
    });
  }
  return res.status(500).send({
    msg: 'Error in creating a new product'
  });
});

export default router;