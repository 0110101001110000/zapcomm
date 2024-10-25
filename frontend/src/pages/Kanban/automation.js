import api from "../../services/api";
import { toast } from "react-toastify";

const automaticCardMove = async (tagId, ticketId) => {
    try {
        await api.delete(`/ticket-tags/${ticketId}`)
        await api.put(`/ticket-tags/${ticketId}/${tagId}`)
        //toast.success("Ticket Tag Movido com Sucesso!");
    } catch (err) {
        console.log(err);
    }
};

export default automaticCardMove;
