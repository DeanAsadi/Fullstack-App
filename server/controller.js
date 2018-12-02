module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get("db");
    db.get_products()
      .then(products => res.status(200).send(products))
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
  },
  deleteProducts: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_products(id)
      .then(() => res.status(200).send())
      .catch(err => console.log("Delete ERROR ", err));
  }
};
