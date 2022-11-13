const express = require("express");
const router = express.Router();
const allexercises = require("../apiData/allexercises.json");
const bodyParts = require("../apiData/bodyParts.json");
const targetMuscles = require("../apiData/targetMuscles.json");
const back = require("../apiData/back.json");
const cardio = require("../apiData/cardio.json");
const chest = require("../apiData/chest.json");
const shoulders = require("../apiData/shoulders.json");
const arms = require("../apiData/arms.json");
const legs = require("../apiData/legs.json");
const abs = require("../apiData/abs.json");
const adductors = require("../apiData/adductors.json");
const biceps = require("../apiData/biceps.json");
const calves = require("../apiData/calves.json");
const forearms = require("../apiData/forearms.json");
const glutes = require("../apiData/glutes.json");
const quads = require("../apiData/quads.json");
const traps = require("../apiData/traps.json");
const triceps = require("../apiData/triceps.json");
const upperback = require("../apiData/upperback.json");

// all exercises
router.get("/", (req, res) => {
  try {
    res.status(200).send(allexercises);
  } catch {
    res
      .status(500)
      .send("We are under maintianance, Sorry for the inconvinience");
  }
});

// all bodyParts
router.get("/bodyParts", (req, res) => {
  try {
    res.status(200).send(bodyParts);
  } catch {
    res
      .status(500)
      .send("We are under maintianance, Sorry for the inconvinience");
  }
});

router.get("/targetMuscles", (req, res) => {
  try {
    res.status(200).send(targetMuscles);
  } catch {
    res
      .status(500)
      .send("We are under maintianance, Sorry for the inconvinience");
  }
});

router.get("/bodyParts/:bodyPart", (req, res) => {
  try {
    const bodyPart = req.params.bodyPart;
    if (bodyPart === "back") {
      res.status(200).send(back);
    } else if (bodyPart === "cardio") {
      res.status(200).send(cardio);
    } else if (bodyPart === "chest") {
      res.status(200).send(chest);
    } else if (bodyPart === "shoulders") {
      res.status(200).send(shoulders);
    } else if (bodyPart === "legs") {
      res.status(200).send(legs);
    } else if (bodyPart === "arms") {
      res.status(200).send(arms);
    }
  } catch {
    res
      .status(500)
      .send("We are under maintianance, Sorry for the inconvinience");
  }
});

router.get("/targetMuscles/:targetMuscle", (req, res) => {
  try {
    const targetMuscle = req.params.targetMuscle;
    if (targetMuscle === "abs") {
      res.status(200).send(abs);
    } else if (targetMuscle === "adductors") {
      res.status(200).send(adductors);
    } else if (targetMuscle === "biceps") {
      res.status(200).send(biceps);
    } else if (targetMuscle === "calves") {
      res.status(200).send(calves);
    } else if (targetMuscle === "forearms") {
      res.status(200).send(forearms);
    } else if (targetMuscle === "glutes") {
      res.status(200).send(glutes);
    } else if (targetMuscle === "quads") {
      res.status(200).send(quads);
    } else if (targetMuscle === "traps") {
      res.status(200).send(traps);
    } else if (targetMuscle === "triceps") {
      res.status(200).send(triceps);
    } else if (targetMuscle === "upperback") {
      res.status(200).send(upperback);
    }
  } catch {
    res
      .status(500)
      .send("We are under maintianance, Sorry for the inconvinience");
  }
});

module.exports = router;
