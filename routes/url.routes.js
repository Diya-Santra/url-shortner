import { Router } from "express"
import { shortController, urlController } from "../controller/url.controller.js"
import isLoggedIn from "../middleware/auth.middleware.js";


const router = Router()

router.route("/:shortId").get(shortController)

router.route("/").post(isLoggedIn, urlController)



export default router
