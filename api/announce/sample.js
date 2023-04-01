exports.createAnnouncement = async (req, res) => {
  const { text } = req.body;

  try {
    const announcement = await Announcement.findOne();

    if (!announcement) {
      throw new Error("No announcement found");
    }

    const now = new Date();

    // Check if lastWeek's date is last week's Sunday
    const lastWeekDate = new Date(announcement.lastWeek.zar[0]?.date);
    const isLastWeek =
      lastWeekDate &&
      lastWeekDate.getDay() === 0 &&
      lastWeekDate.getTime() === now.getTime() - 7 * 24 * 60 * 60 * 1000;

    // Check if beforeWeek's date is before last week's Sunday
    const beforeWeekDate = new Date(announcement.beforeWeek.zar[0]?.date);
    const isBeforeWeek =
      beforeWeekDate &&
      beforeWeekDate.getTime() ===
        lastWeekDate.getTime() - 7 * 24 * 60 * 60 * 1000;

    if (isLastWeek && isBeforeWeek) {
      // Only update thisWeek.zar
      announcement.thisWeek.zar.push({ text });
    } else {
      // Move thisWeek.zar to lastWeek.zar
      announcement.lastWeek.zar = announcement.thisWeek.zar;

      // Move lastWeek.zar to beforeWeek.zar
      announcement.beforeWeek.zar = announcement.lastWeek.zar;

      // Set thisWeek.zar to the new announcement
      announcement.thisWeek.zar.push({ text });
    }

    await announcement.save();

    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateThisWeekZar = async (req, res) => {
  const announcement = await Announcement.findOne();

  const { _id, text } = req.body;

  // Find the object with the specified _id in the zar array
  const index = announcement.thisWeek.zar.findIndex((obj) => obj._id === _id);

  if (index !== -1) {
    // If the object is found, update the text property
    announcement.thisWeek.zar[index].text = text;
  } else {
    // Otherwise, push the new object to the array
    announcement.thisWeek.zar.push({ text });
  }

  // Save the updated announcement object to the database
  const result = await announcement.save();

  res.status(200).json(result);
};

exports.deleteZarTextById = async (req, res) => {
  try {
    const announcement = await Announcement.findOne();
    const { id } = req.params;
    // Find the object with the specified _id in the zar array
    const index = announcement.thisWeek.zar.findIndex((obj) => obj._id === id);
    if (index !== -1) {
      // If the object is found, remove it from the array
      announcement.thisWeek.zar.splice(index, 1);
      // Save the updated announcement object to the database
      const result = await announcement.save();
      res.status(200).json(result);
    } else {
      // If the object is not found, return a 404 error
      res.status(404).json({ error: "Object not found" });
    }
  } catch (error) {
    // If an error occurs during the database operation, return a 500 error
    res.status(500).json({ error: error.message });
  }
};

exports.getAnnouncement = async (req, res) => {
  const announcement = await Announcement.findOne();
  res.status(200).json(announcement);
};

exports.updateAnnounceById = async (req, res) => {
  let textWithId = await Announce.thisWeek.zar.findById(req.params.id);
  if (req.body.text) {
    textWithId = { text: req.body.text };
  } else {
    textWithId = await Announce.thisWeek.zar.findByIdAndRemove(req.params.id);
  }
  res.status(200).json(textWithId);
};
