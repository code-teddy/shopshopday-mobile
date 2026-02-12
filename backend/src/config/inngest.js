import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User} from "../models/user.model.js"

export const inngest = new Inngest({ id: "shopshopday-mobile" });

const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk/user.created"},
    async({event}) => {
        await connectDB();
        const {id, email_addresses, first_name, last_name, image_url}= event.data
    }
)

export const functions = [syncUser];