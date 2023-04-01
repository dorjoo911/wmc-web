const Announce = require("./announceModel"); // Import the Mongoose model
exports.createAnnounce = async (req, res) => {
  try {
    const announce = await Announce.findOne();

    // Update thisWeek fields with values from req.body
    announce.thisWeek.userName = req.body.userName;
    announce.thisWeek.userId = req.body.userId;

    // Push a new object into the zar array with the text from req.body
    announce.thisWeek.zar.push({ text: req.body.text });

    // Save the updated document to the database
    await announce.save();

    res.status(201).json(announce);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAnnounces = async (req, res) => {
  try {
    const announces = await Announce.findOne(); // Retrieve the first document in the "announces" collection

    // Get the date of last Sunday and the Sunday before that
    const today = new Date();
    const lastSunday = new Date(
      today.setDate(today.getDate() - today.getDay())
    );
    const lastWeekSunday = new Date(
      lastSunday.setDate(lastSunday.getDate() - 7)
    );

    // If the lastWeek and beforeWeek dates match last week's and the week before that's Sundays respectively, update the announce document as described
    if (
      announces.lastWeek.userId &&
      new Date(announces.lastWeek.updatedAt).toDateString() ===
        lastWeekSunday.toDateString() &&
      announces.beforeWeek.userId &&
      new Date(announces.beforeWeek.updatedAt).toDateString() ===
        lastSunday.toDateString()
    ) {
      announces.thisWeek = {
        userName: "",
        userId: "",
        zar: [{ text: "" }],
      };
      announces.lastWeek = announces.thisWeek;
      announces.beforeWeek = announces.lastWeek;
    }

    await announces.save(); // Save the updated document to the database

    res.status(200).json(announces); // Send the updated document back in the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateAnnounceById = async (req, res) => {
  try {
    const announce = await Announce.findOne();
    const textObj = announce.thisWeek.zar.id(req.params.id);
    if (textObj) {
      if (req.body.text) {
        textObj.text = req.body.text; // update the text property of the textObj
        await announce.save(); // save the updated announce document to the database
        res.status(200).json(textObj);
      } else {
        textObj.remove(); // remove the textObj from the array
        await announce.save(); // save the updated announce document to the database
        res.status(200).json({ message: "Text removed" });
      }
    } else {
      res.status(404).json({ message: "Text not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
