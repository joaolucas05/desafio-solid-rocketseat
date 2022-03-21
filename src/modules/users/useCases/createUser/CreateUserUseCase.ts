import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest) {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    if(userAlreadyExists){
      throw new Error("User Already Exists");
    }
    const data = this.usersRepository.create({email, name});
    return data
  }
}

export { CreateUserUseCase };
