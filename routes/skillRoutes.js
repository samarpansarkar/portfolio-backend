const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");
const { protect } = require("../middleware/authMiddleware");

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private/Admin
router.post("/", protect, async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const createdSkill = await skill.save();
    res.status(201).json(createdSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update a skill
// @route   PUT /api/skills/:id
// @access  Private/Admin
router.put("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
      Object.assign(skill, req.body);
      const updatedSkill = await skill.save();
      res.json(updatedSkill);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
router.delete("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
      await skill.deleteOne();
      res.json({ message: "Skill removed" });
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
