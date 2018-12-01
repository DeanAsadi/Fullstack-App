module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get("db");
    db.get_products()
      .then(product => res.status(200).send(product))
      .catch(err => console.log("Get product ERROR", err));
  },
  addProducts: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, image } = req.body;
    db.add_products([name, price, image])
      .then(
        product => res.status(200).send(product),
        console.log("Adding successful...")
      )
      .catch(err => console.log("adding error", err));
  }
};
