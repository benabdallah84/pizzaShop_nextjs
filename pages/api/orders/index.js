import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();
  if (method == "GET") {
    try {
      const orders = await Order.find();
      res.status(201).json(orders);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  if (method == "post") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
export default handler;
