import { nanoid } from "nanoid";
import URL from "../models/url.model.js";
import { getSession } from "../services/auth.services.js";

const shortController = async (req, res) => {
    const { shortId } = req.params; 
    const mainUrl = await URL.findOne({
        shorten: shortId
    });

    res.redirect(mainUrl.original);
};

const urlController = async (req, res) => {
    const { original } = req.body;
    const id = nanoid(10);
    const url = await URL.create({
        original: original,
        shorten: id
    });
    return res.render("home",{
        shorten:id
    })
};

export {
    shortController,
    urlController
};
