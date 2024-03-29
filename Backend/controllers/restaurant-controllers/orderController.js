// imports
const orderModel = require('../../models/orderModel');
const {Mongoose,Types} = require('mongoose');

exports.viewOrders = async (req, res) => {
        try {
            const { restaurantId } = req.body;
    
            const ordersByRestaurant = await orderModel.aggregate([
                {
                    $match: {
                        restaurantId: new Types.ObjectId(restaurantId), // Filter by the specified restaurantId
                        orderStatus: 'Pending' // Filter by the orderStatus
                    }
                },
                {
                    $group: {
                        _id: "$tableNo",
                        tableNo: { $first: "$tableNo" }, // Include the tableNo
                        orders: {
                            $push: {
                                itemName: "$orderItems.itemName",
                                itemQuantity: "$orderItems.itemQuantity"
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: 0, // Exclude the default _id field
                        tableNo: 1, // Include tableNo in the output
                        orders: 1 // Include the orders array
                    }
                }
            ]);
    
            return res.status(200).json({ ordersByRestaurant });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
  