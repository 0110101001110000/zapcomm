/* import api from "../../services/api";
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

export default automaticCardMove; */

import api from "../../services/api";
import { toast } from "react-toastify";
import { defaultTags } from "./config";

class KanbanAutomation {
    async automaticCardMove(tagId, ticketId) {
      try {
        await api.delete(`/ticket-tags/${ticketId}`);
        await api.put(`/ticket-tags/${ticketId}/${tagId}`);
        //toast.success("Ticket Tag Movido com Sucesso!");
      } catch (err) {
        console.log(err);
      }
    }

    needsDefaultTags(tags) {
        if (tags.length < 2) {
            return true;
        } else {
            return false;
        }
    }

    async saveNewTag(name, color, kanban, userId) {
      const tagData = { name, color, kanban, userId };
      try {
        const response = await api.post("/tags", tagData);
        const tagId = response.data.id;
        if (name === defaultTags.talkingTag.name) {
          defaultTags.talkingTag.id = tagId;
        } else if (name === defaultTags.finishedTag.name) {
          defaultTags.finishedTag.id = tagId;
        }
      } 
      catch (err) {
        console.log(err);
      }
    }
  }
  
export default new KanbanAutomation();

