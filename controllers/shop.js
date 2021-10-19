const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(product=>{
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>consolelog(err))
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({ where: { id: prodId } })
    .then(products => {
      res.render('shop/product-detail', {
        product: products[0],
        pageTitle: products[0].title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
//   console.log(`prodId : ${prodId}`)
//   Product.findByPk(prodId)
//   .then(product=>{
//     console.log(product)
//     res.render('shop/product-detail', {
//       product: product,
//       pageTitle: product.dataValues.title,
//       path: '/products'
//     });
//   })
//   .catch((err)=>console.log(err))
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(product=>{
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>console.log(err))
};

exports.getCart = (req, res, next) => {
  req.user.getCart()
   .then(cart=>{
    //  console.log(cart)
    return cart.getProducts()
     .then(cartProducts=>{
       res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: cartProducts
       });       
     }).catch(err=>console.log(err))
   }).catch(err=>console.log(err))
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  req.user.getCart()
   .then(cart=>{
     fetchedCart = cart;
     cart.getProducts({where:{id:prodId}})
      .then(cartProducts=>{
        let products
        if(cartProducts.length>0){
          products = cartProducts[0];
        }
        let newQuantity = 1;
        if(products){
          //...
        }
        return Product.findByPk(prodId)
        .then(product=>{
          fetchedCart.addProduct(product, {through:{quantity:newQuantity}})
        }).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
   })
    .then(()=> res.redirect('/cart'))
   .catch(err=>console.log(err))
  
  
  //  Product.findById(prodId, product => {
  //   Cart.addProduct(prodId, product.price);
  // });
  // res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
