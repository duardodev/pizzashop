![Preview do projeto](https://i.imgur.com/T4BGETP.png)

# Sobre

O PizzaShop é uma aplicação que simula uma loja virtual para uma pizzaria. Tem como funcionalidades: selecionar as opções disponíveis no cardápio, escolher determinada quantidade e tamanho, e solicitar o pedido preenchendo o formulário com o endereço de entrega e a forma de pagamento.

A aplicação conta com duas telas responsivas, sendo a primeira uma tela de apresentação e listagem das pizzas, que são obtidas por meio do <strong>Hygraph</strong>. Na segunda tela, encontra-se o formulário, cuja validação foi feita com o <strong>React Hook Form</strong> em conjunto com o <strong>Zod</strong>, e através da <strong>API ViaCep</strong>, três dos campos desse formulário são preenchidos automaticamente com base no CEP informado.

## 📦 Tecnologias usadas:

- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Hygraph](https://hygraph.com/)
- [ViaCep](https://viacep.com.br/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Headless UI](https://headlessui.com/)

## 🔨 Guia de instalação

**Clone o projeto**

```bash
git clone https://github.com/sampaiocode/pizzashop.git
```

**Siga os passos abaixo**

```bash
# Acesse a pasta
$ cd pizzashop

# Instale as dependências
$ yarn

# Crie um arquivo .env.local'
# Faça uma cópia de '.env.local.example' para '.env.local'
# Preencha as variáveis ambiente em seguida
$ cp .env.local.example .env.local

# Inicie a aplicação
$ yarn dev
```

## 📄 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

---

Desenvolvido com 💙 por [Deivit Eduardo](https://github.com/sampaiocode)
