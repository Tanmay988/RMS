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

exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId, restaurantId } = req.body;
        const order = await orderModel.findOne({ orderId: orderId, restaurantId: restaurantId });
        order.orderStatus = 'Completed';
        await order.save();
        return res.status(200).json({ message: 'Order status updated successfully' });        
    }catch(error){
        return res.status(400).json({ message: error.message });
    }
};

exports.viewOrderHistory = async (req, res) => {
    try {
        const { restaurantId } = req.body;

        const ordersByRestaurant = await orderModel.aggregate([
            {
                $match: {
                    restaurantId: new Types.ObjectId(restaurantId), // Filter by the specified restaurantId
                    orderStatus: 'Completed' // Filter by the orderStatus
                }
            },
            {
                $project: {
                    _id: 0, // Exclude the default _id field
                    orderId: 1, // Include the orderId field
                    orderTotal: 1 // Include the orderTotal field
                }
            }
        ]);
        return res.status(200).json({ ordersByRestaurant });
    }catch(error){
        return res.status(400).json({ message: error.message });
    }
};
  