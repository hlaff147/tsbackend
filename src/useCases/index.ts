import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider"
import { PostgresUserRepository } from "../repositories/implementation/PostgresUserRepository"
import { CreateUserController } from "./CreateUser/CreateUserController"
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase"

const postgresUsersRepository = new PostgresUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }