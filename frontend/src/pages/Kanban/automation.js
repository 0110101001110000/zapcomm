
import api from "../../services/api";
import { defaultTags } from "./config";

class KanbanAutomation {
    async getTagId(name, color) {
      const tagData = { name, color };

      try {
        const { data } = await api.get("/tags/");

        const matchingTags = data.tags.filter(
          (tag) => tag.name === tagData.name && tag.color === tagData.color
        );

        const tagId = matchingTags.length > 0 ? matchingTags[0].id : null;

        return tagId;
      } 
      catch (err) {
        console.log(err);
      }
    }

    async needsDefaultTags() {
      try {
        const talkingTagId = await this.getTagId(defaultTags.talkingTag.name, defaultTags.talkingTag.color);
        const finishedTagId = await this.getTagId(defaultTags.finishedTag.name, defaultTags.finishedTag.color);
    
        if (talkingTagId && finishedTagId) {
          return false;
        } else {
          return true;
        }
      } catch (err) {
        console.log(err);
        return true;
      }
    }

    async saveNewTag(name, color, kanban, userId) {
      const tagData = { name, color, kanban, userId };
      try {
        await api.post("/tags", tagData);
      } 
      catch (err) {
        console.log(err);
      }
    }

    async automaticCardMove(tagId, ticketId) {
      try {
        await api.delete(`/ticket-tags/${ticketId}`);
        await api.put(`/ticket-tags/${ticketId}/${tagId}`);
      } catch (err) {
        console.log(err);
      }
    }
  }
  
export default new KanbanAutomation();

