const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
    },
    body: {
      type: String,
      required: true,
      maxLength: 250,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        // required: true,
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
    dateVisited: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
