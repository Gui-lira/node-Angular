import deleteCar from "./deleteCar";
import deleteUser from "./deleteUser";
import getAllCars from "./getAllcars";
import getAllUsers from "./getAllUsers";
import getAvailableCars from "./getAvailableCars";
import getCarByAlocator from "./getCarByAlocator";
import loginAdmin from "./loginAdmin";
import loginUser from "./loginUser";
import putAdmin from "./putAdmin";
import putCars from "./putCar";
import putUser from "./putUser";
import rentCar from "./rentCar";
import returnCar from "./returnCar";
import updateUser from "./updateUser";

const controllers = {
    updateUser,
    returnCar,
    rentCar,
    putUser,
    putCars,
    putAdmin,
    loginUser,
    loginAdmin,
    getCarByAlocator,
    getAvailableCars,
    getAllUsers,
    getAllCars,
    deleteUser,
    deleteCar,
};

export default controllers;