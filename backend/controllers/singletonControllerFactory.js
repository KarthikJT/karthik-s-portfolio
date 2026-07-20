/**
 * Singleton controller factory.
 * Profile, ProfessionalSummary and Contact only ever have ONE document.
 * GET returns it (creating a default if missing), PUT upserts it.
 */
const createSingletonController = (Model) => ({
  get: async (req, res) => {
    let doc = await Model.findOne();
    if (!doc) doc = await Model.create({});
    res.json(doc);
  },

  update: async (req, res) => {
    let doc = await Model.findOne();
    if (!doc) {
      doc = await Model.create(req.body);
    } else {
      doc = await Model.findByIdAndUpdate(doc._id, req.body, {
        new: true,
        runValidators: true,
      });
    }
    res.json(doc);
  },
});

module.exports = createSingletonController;
