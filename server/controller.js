
module.exports = {
  getTheHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_all_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  addHouses: (req, res) => {
    let { propertyName, address, city, state, zip } = req.body;
    const db = req.app.get("db");
    db.add_houses(propertyName, address, city, state, zip)
      .then(res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  deleteHouse: (req, res) => {
    let { id } = req.params;
    const db = req.app.get("db");
    db.delete_house(id)
      .then(res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
