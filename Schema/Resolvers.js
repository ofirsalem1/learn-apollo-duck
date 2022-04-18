const mongoose = require("mongoose");
const Duck = mongoose.model("Duck", {
  name: { type: String, unique: true },
  color: String,
});

let ducks;
Duck.find().then((ducksDb) => (ducks = ducksDb));

const resolvers = {
  Query: {
    getAllDucks() {
      return ducks;
    },
  },
  Mutation: {
    async addDuck(parent, args) {
      try {
        const newDuck = args;
        const duck = new Duck({ name: newDuck.name, color: newDuck.color });
        await duck.save();
        ducks.push(newDuck);
        return newDuck;
      } catch (err) {
        return err;
      }
    },

    removeDuck(parent, args) {
      const duckToRemove = args.name;
      Duck.deleteOne({ name: duckToRemove }, (err) => {
        if (err) return err;
      });
      const duckIndex = ducks.findIndex((duck) => duck.name === duckToRemove);
      ducks.splice(duckIndex, 1);
      return ducks;
    },

    async updateDuck(parent, args) {
      const duckToUpdate = args.name;
      await Duck.findOneAndUpdate(
        { name: duckToUpdate },
        { color: args.newColor }
      );
      const duckIndex = ducks.findIndex((duck) => duck.name === duckToUpdate);
      ducks[duckIndex].color = args.newColor;
      return ducks[duckIndex];
    },
  },
};

module.exports = { resolvers };
