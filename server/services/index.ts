import update from "../models/update";
import deleteElement from "./delete";
import get from "./get";
import insert from "./insert";
import signToken from "./signToken";
import verifyToken from "./verifyToken";

const index = {
    verifyToken,
    update,
    signToken,
    deleteElement,
    insert,
    get,
};

export default index;