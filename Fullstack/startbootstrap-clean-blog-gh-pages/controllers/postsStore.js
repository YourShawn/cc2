const BlogPost = require("../models/BlogPost");

module.exports = async (req, res, next) => {
  console.log(req.body);
  let image = req.files.image;
  image.mv(
    path.resolve(__dirname, "public/assets/img", image.name),
    async (error) => {
      await BlogPost.create(
        {
          ...req.body,
          image: "assets/img/" + image.name,
        },
        (error, blogpost) => {
          res.redirect("/");
        }
      );
    }
  );
};
