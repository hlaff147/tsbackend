import { uuid } from 'uuidv4';
import { ICreateUserRequestDTO } from '../useCases/CreateUser/CreateUserDTO';
export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: ICreateUserRequestDTO, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid()
        } else {
            this.id = id;
        }
    }

}