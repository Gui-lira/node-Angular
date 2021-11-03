import express from 'express';
import bodyParser from 'body-parser';
import controllers from './controllers';
import midlewares from './midlewares';

const { 
    putCars,
    putAdmin,
    putUser,
    getAllCars,
    getAllUsers,
    getAvailableCars,
    getCarByAlocator,
    loginAdmin,
    loginUser,
    rentCar,
    returnCar,
    deleteCar,
    deleteUser,
    updateUser,
} = controllers;
const {
    verifyColorAndModel,
    verifyEmail,
    verifyLogin,
    verifyName,
    verifyPassword,
    verifyPlate,
    verifyTokenUser,
    verifyCpf,
    isAdmin,
    verifyLoginAdmin,
} = midlewares;
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user',verifyEmail, verifyName, verifyPassword, verifyCpf, putUser);

app.get('/user',isAdmin ,getAllUsers);

app.delete('/user', verifyTokenUser, deleteUser);

app.put('/user', verifyTokenUser, updateUser);

app.get('/user/car', verifyTokenUser, getCarByAlocator)

app.put('/user/rent/:id', verifyTokenUser, rentCar);

app.put('/user/return/:id', verifyTokenUser, returnCar);

app.post('/user/login', verifyLogin, loginUser);

app.post('/car', verifyColorAndModel, verifyPlate, putCars);

app.get('/car/all', verifyTokenUser, getAllCars);

app.get('/car', verifyTokenUser, getAvailableCars);

app.delete('/car/:id', isAdmin, deleteCar);

app.put('/admin', isAdmin, verifyEmail, verifyName, putAdmin);

app.post('/admin/login', verifyLoginAdmin);




app.listen(PORT, () => {
    console.log('foi');
});