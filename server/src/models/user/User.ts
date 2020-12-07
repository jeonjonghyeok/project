import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {Credential} from "./Credential";

@Model()
export class User {
    @ObjectID("id")
    _id: string;

    @Required()
    email: string;
    
    @Required(false)
    name: string;

    @Required()
    password: string;

    @Required(false)
    token: string;

  
}