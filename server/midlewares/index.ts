import verifyColorAndModel from "./verifyColorAndModel";
import verifyEmail from "./verifyEmail";
import verifyLogin from "./verifyLogin";
import verifyName from "./verifyName";
import verifyPassword from "./verifyPassword";
import verifyPlate from "./verifyPlate";
import verifyTokenUser from "./verifyToken";

const midlewares = {
    verifyPlate,
    verifyName,
    verifyLogin,
    verifyEmail,
    verifyColorAndModel,
    verifyTokenUser,
    verifyPassword,
};

export default midlewares;