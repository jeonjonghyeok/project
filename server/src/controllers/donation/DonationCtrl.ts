import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope} from "@tsed/common";
import { Required, Returns } from "@tsed/schema";
import {Authenticate, Authorize} from "@tsed/passport";
import {Donation} from "../../models/donation/Donation";

// @Scope(ProviderScope.SINGLETON)
@Controller("/donation")
export class DonationCtrl {
    @Post("/")
    signup(@Req() req:Req, @Required() @BodyParams("type") type: String, @Required() @BodyParams("price") price: string ) {
    }

    // @Get("/userinfo")
    // @Authorize("jwt")
    // @Returns(200,User)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // getUserInfo(@Req() req: Req, @HeaderParams("authorization") token: string) {

    // return req.user;
    // }

}
