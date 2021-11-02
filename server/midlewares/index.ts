import isAdmin from "./isAdmin";
import verifyColorAndModel from "./verifyColorAndModel";
import verifyCpf from "./verifyCpf";
import verifyEmail from "./verifyEmail";
import verifyLogin from "./verifyLogin";
import verifyLoginAdmin from "./verifyLoginAdmin";
import verifyName from "./verifyName";
import verifyPassword from "./verifyPassword";
import verifyPlate from "./verifyPlate";
import verifyTokenUser from "./verifyToken";

const midlewares: any = {
    verifyPlate,
    verifyName,
    verifyLogin,
    verifyEmail,
    verifyColorAndModel,
    verifyTokenUser,
    verifyPassword,
    verifyCpf,
    isAdmin,
    verifyLoginAdmin,
};

export default midlewares;