// imports
const menuModel = require("../../models/menuModel");

// function to add menu items

exports.addMenu = async (req, res) => {
  const { restaurantId, itemName, itemPrice, itemDescription, itemCategory } =
    req.body;
  try {
    if (await menuModel.findOne({ restaurantId, itemName })) {
      return res.status(400).json({ message: "Menu item already exists" });
    }

    const menu = new menuModel({
      restaurantId,
      itemName,
      itemPrice,
      itemDescription,
      itemCategory,
    });
    await menu.save();
    return res.status(200).json({ message: "Menu item added successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// function to edit menu items
exports.editMenu = async (req, res) => {
  const { restaurantId, itemName, itemPrice, itemDescription } = req.body;
  try {
    if (!(await menuModel.findOne({ restaurantId, itemName }))) {
      return res.status(400).json({ message: "Menu item does not exist" });
    }
    await menuModel.findOneAndUpdate(
      { restaurantId, itemName },
      { itemPrice, itemDescription }
    );
    return res.status(200).json({ message: "Menu item updated successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// function to remove menu items
exports.removeMenu = async (req, res) => {
  const { restaurantId, itemName } = req.body;
  try {
    if (!(await menuModel.findOne({ restaurantId, itemName }))) {
      return res.status(400).json({ message: "Menu item does not exist" });
    }
    await menuModel.findOneAndDelete({ restaurantId, itemName });
    return res.status(200).json({ message: "Menu item removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const resp = await menuModel.find();
    // console.log(resp);
    if (resp.length === 0)
      return res.status(400).json({ message: "Menu Not Found" });
    return res.status(200).json({ message: resp });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editMenuById = async (req, res) => {
  const { id, name } = req.params;

  try {
    const resp = await menuModel.findOne({
      restaurantId: id,
      itemName: name,
    });
    if (!resp) return res.status(400).json({ message: "Menu Not Found" });
    return res.status(200).json({ message: resp });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
