import userModel from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Item added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: " Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addToCart, updateCart, getUserCart };

//chatgpt

// const addToCart = async (req, res) => {
//     try {
//       const { userId, itemId, size } = req.body;

//       const userData = await userModel.findById(userId);
//       if (!userData) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }

//       // Clone the cartData object safely
//       const cartData = { ...userData.cartData };

//       if (!cartData[itemId]) {
//         cartData[itemId] = {};
//       }

//       cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

//       await userModel.findByIdAndUpdate(userId, { cartData });

//       res.json({ success: true, message: "Item added to cart" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: "Internal server error" });
//     }
//   };
