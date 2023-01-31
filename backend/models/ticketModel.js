const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please please select a product"],
      enum: ["iPhone", "Mac", "iPad"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    // Timestamps that logs updates and creation times
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
