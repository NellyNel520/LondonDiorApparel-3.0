const { Category, Product } = require('../models')

// CREATE 

const createProduct = async (req, res) => {
	try {
		console.log(req.body)
		const product = await new Product(req.body);
		await product.save();
		if (req.body.categoryId) {
			const categoryId = await Category.findById(req.body.categoryId)
			categoryId.products.push(product._id);
			await categoryId.save();
		}

		return res.status(201).json({
			product,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

// Update Product

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
}
}


// Delete Product

const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Product deleted");
      }
      throw new Error("Product not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (product) {
			return res.status(200).json({ product });
		}
		return res
			.status(404)
			.send('Product with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};



// Get All Products BASIC

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		return res.status(200).json({ products });
	} catch (error) {
		return res.status(500).send(error.message);
	}
}; 

// Get all products to filter 

const getAllProductsAndFilter = async (req, res) => {
	const qNew = req.query.new;
  const qCategory = req.query.category;
	try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};






module.exports ={
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
	getAllProductsAndFilter


}