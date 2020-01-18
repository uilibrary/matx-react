import Mock from "../mock";
import shortId from "shortid";

const EcommerceDB = {
  productList: [
    {
      id: "323sa680b32497dsfdsgga21rt47",
      imgUrl: "/assets/images/products/speaker-1.jpg",
      price: 324.0,
      title: "Bass Speaker Venue 8 - 8 - Intel Atom - 16GB - Black",
      category: "audio",
      brand: "Microlab",
      rating: 1,
      freeShipping: false,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: "323sa680b324976dfgga21rt47",
      imgUrl: "/assets/images/products/speaker-2.jpg",
      price: 454.0,
      title: "Bass Speaker",
      category: "audio",
      brand: "Microlab",
      rating: 3,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/headphone-1.jpg",
      price: 134.0,
      title: "Bass Speaker",
      category: "audio",
      brand: "Sony",
      rating: 4,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/headphone-2.jpg",
      price: 987.0,
      title: "Bit Bass Headphone",
      category: "audio",
      brand: "Sony",
      rating: 5,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/headphone-3.jpg",
      price: 870.0,
      title: "Sony Headphone",
      category: "audio",
      brand: "Sony",
      rating: 4,
      freeShipping: false,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/watch-1.jpg",
      price: 23.0,
      title: "Comlion Watch",
      category: "fashion",
      brand: "Comlion",
      rating: 3,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: "323sa680b32497dfdfgga21rt47",
      imgUrl: "/assets/images/products/speaker-2.jpg",
      price: 454.0,
      title: "Bass Speaker",
      category: "audio",
      brand: "Microlab",
      rating: 1,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/headphone-4.jpg",
      price: 299.0,
      title: "Beats Headphone",
      category: "audio",
      brand: "Beats",
      rating: 5,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/iphone-1.jpg",
      price: 978.0,
      title: "Iphone 11 Max Pro",
      category: "cellphone",
      brand: "Iphone",
      rating: 2,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/iphone-2.jpg",
      price: 12.0,
      title: "IPhone 11 Max Pro Case",
      category: "accessories",
      brand: "Iphone",
      rating: 4,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/watch-1.jpg",
      price: 23.0,
      title: "Comlion Watch",
      category: "fashion",
      brand: "Comlion",
      rating: 1,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/watch-2.jpg",
      price: 75.0,
      title: "Kurren Watch",
      category: "fashion",
      brand: "Kurren",
      rating: 3,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/iphone-1.jpg",
      price: 978.0,
      title: "Iphone 11 Max Pro",
      category: "cellphone",
      brand: "Iphone",
      rating: 5,
      freeShipping: true,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    }
  ],

  category: [
    {
      title: "audio",
      product: 321
    },
    {
      title: "fashion",
      product: 123
    },
    {
      title: "cellphone",
      product: 546
    },
    {
      title: "accessories",
      product: 76
    }
  ],

  brand: [
    {
      title: "Microlab",
      product: 32
    },
    {
      title: "Sony",
      product: 534
    },
    {
      title: "Beats",
      product: 23
    },
    {
      title: "Iphone",
      product: 65
    },
    {
      title: "Comlion",
      product: 198
    }
  ],

  rating: [
    {
      rate: 5,
      product: 345
    },
    {
      rate: 4,
      product: 53
    },
    {
      rate: 3,
      product: 765
    },
    {
      rate: 2,
      product: 32
    },
    {
      rate: 1,
      product: 64
    }
  ],

  cart: [
    {
      uid: "1",
      list: [
        {
          productId: "323sa680b324976dfgga21rt47",
          amount: 1
        }
      ]
    }
  ],

  userList: [
    {
      id: "1",
      name: "John Doe",
      avatar: "/assets/images/face-7.jpg"
    },
    {
      id: "323sa680b3249760ea21rt47",
      name: "Frank Powell",
      avatar: "/assets/images/faces/13.jpg"
    },
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "/assets/images/face-1.jpg"
    }
  ]
};

const getDetailedCartList = uid => {
  let cartList = EcommerceDB.cart.find(userCart => userCart.uid == uid).list;
  return cartList.map(product => ({
    amount: product.amount,
    ...EcommerceDB.productList.find(item => item.id === product.productId)
  }));
};

Mock.onGet("/api/ecommerce/get-product-list").reply(config => {
  const response = EcommerceDB.productList;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-category-list").reply(config => {
  const response = EcommerceDB.category;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-rating-list").reply(config => {
  const response = EcommerceDB.rating;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-brand-list").reply(config => {
  const response = EcommerceDB.brand;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-cart-list").reply(config => {
  let uid = config.data;
  let response = [];

  if (uid) {
    response = getDetailedCartList(uid);
  }

  return [200, response];
});

Mock.onPost("/api/ecommerce/add-to-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      let product = userCart.list.find(
        product => product.productId === productId
      );
      if (product) {
        return {
          ...userCart,
          list: userCart.list.map(product => {
            if (product.productId === productId) {
              return {
                ...product,
                amount: product.amount + 1
              };
            } else return product;
          })
        };
      } else {
        userCart.list.push({
          productId,
          amount: 1
        });
        return userCart;
      }
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-from-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.filter(product => product.productId !== productId)
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/update-cart-amount").reply(config => {
  let { uid, productId, amount } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.map(product => {
          if (product.productId === productId) {
            product.amount = amount;
          }
          return product;
        })
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});
