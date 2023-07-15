import { Router } from "express";

const router = Router();

router.post('/users', (request, response) => {
    return response.status(201).send("User criado com sucesso!");
})

export { router }