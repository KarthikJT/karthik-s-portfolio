/**
 * Generic CRUD controller factory.
 *
 * Every "list" style resource (Education, Skill, Internship, Project,
 * Hackathon, Certification, Achievement, SocialLink) follows the exact same
 * REST pattern:
 *   GET    /api/<resource>        -> public, list all (sorted by `order`)
 *   GET    /api/<resource>/:id    -> public, get one
 *   POST   /api/<resource>        -> protected, create
 *   PUT    /api/<resource>/:id    -> protected, update
 *   DELETE /api/<resource>/:id    -> protected, delete
 *
 * Rather than duplicating this logic 8 times, we build it once here and
 * reuse it per Mongoose model. Each route file can still add resource
 * specific logic (e.g. image upload handling) on top of this.
 */
const createCrudController = (Model) => ({
  getAll: async (req, res) => {
    const docs = await Model.find().sort({ order: 1, createdAt: 1 });
    res.json(docs);
  },

  getOne: async (req, res) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  },

  create: async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json(doc);
  },

  update: async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  },

  remove: async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  },
});

module.exports = createCrudController;
