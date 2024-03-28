// import { UserModel } from 'src/modules/user/entities/user.entity';
import { UserModel } from '../../entities/user.entity';

export const userStub = (): Partial<UserModel> => {
  return {
    id: 1,
    firstName: 'Setor',
    lastName: 'Setor',
    email: 'Setor',
    password: 'Setor',
    img: 'Setor',
    isActive: false,
  };
};
