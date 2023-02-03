import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";

function Ticket() {
  const dispatch = useDispatch();
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
          <hr />
          <div className="ticket-desc">
            <h3>Description Of Issue</h3>
            <p>{ticket.description}</p>
          </div>
        </h3>
      </header>
    </div>
  );
}

export default Ticket;
