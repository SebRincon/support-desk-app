import { getTicket, reset, closeTicket } from "../features/tickets/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function Ticket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticket, isLoading, isSuccess, isMessage, isError, message } =
    useSelector((state) => state.ticket);
  const params = useParams();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url={"/tickets"} />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString(`en-US`)}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description Of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      {ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;
