const Posts = require("./postModel");

// exports.getPosts = async (req, res) => {
//   let posts = [];

//   if (req.params.id) {
//     posts = await Posts.findById(req.params.id);
//   } else {
//     posts = await Posts.find();
//   }
//   res.status(200).json(posts);
// };

exports.getPosts = async (req, res) => {
  let posts = [];

  if (req.params.id) {
    try {
      posts = await Posts.findById(req.params.id);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error finding post by ID" });
    }
  } else {
    try {
      posts = await Posts.find();

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        // Check if the deadline has passed
        if (new Date(parseInt(post.deadline)) < new Date()) {
          // If the deadline has passed, remove the post from the database
          try {
            await Posts.findByIdAndRemove(post._id);
            console.log(`removed due posts`);
          } catch (error) {
            console.error(error);
            return res
              .status(500)
              .json({ message: "Error removing post from database" });
          }

          // Remove the post from the array of posts
          posts.splice(i, 1);
          i--;
          continue;
        }

        // Save the updated post to the database
        try {
          await post.save();
        } catch (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error saving post to database" });
        }
      }

      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error getting posts" });
    }
  }
};

exports.save = async (req, res) => {
  const result = await new Posts(req.body).save();
  res.status(201).json(result);
};

exports.updatePostById = async (req, res) => {
  let post = await Posts.findById(req.params.id);
  if (req.body.comment) {
    post.review.push(req.body);
  } else {
    post.prayers.push(req.body);
  }
  const result = await Posts.findByIdAndUpdate({ _id: req.params.id }, post);
  res.status(200).json(result);
};

exports.deletePostById = async (req, res) => {
  res.status(200).json(await Posts.findByIdAndRemove(req.params.id));
};
