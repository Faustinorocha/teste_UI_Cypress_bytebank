import { fakerPT_BR as faker } from '@faker-js/faker'


export const dadosNovoUsuario = () => {
     const firstName = faker.person.firstName();
     const lastName = faker.person.lastName();

     return {
        nome: firstName + ' ' + lastName,
        email: faker.internet.email({firstName, lastName}),
        senha: faker.internet.password()
     }
}

