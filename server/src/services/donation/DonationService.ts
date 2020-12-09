import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Donation} from "../../models/donation/Donation";
@Service()
export class DonationService {
    @Inject(Donation)
    private Donation: MongooseModel<Donation>;
    /**
     * Find a User by his ID.
     * @param id
     * @returns {undefined|Donation}
     */
    /*async find(id: string): Promise<User | null>{
        const User = await this.User.findOne({email:id});

        return User;

    }*/
    async save(Donation: Donation): Promise<Donation> {
        const model = new this.Donation(Donation);
        await model.save(function(err,Donation){
            if(err) return console.error(err);
            console.log(Donation);
        })
        return model;
    }
    /*async update(User: User): Promise<User> {
        const model = new this.User(User);
        await model.update(
            {token: model.token}
        )
        return model;
    }
    // async findOne(id: string): Promise<Credential | null>{
    //     const Credential = await this.User.findOne({email:id});

    //     return Credential;

    // }*/

}
