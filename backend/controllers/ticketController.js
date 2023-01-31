const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Grab user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get tickets" });
});

// @desc Create user tickets
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "create tickets" });
});

module.exports = {
  getTickets,
  createTicket,
};
