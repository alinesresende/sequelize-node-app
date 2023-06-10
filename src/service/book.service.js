const { Book } = require('../models');

// Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.
// Func findAll retorna a lista de livros
const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

// Crie um método getById que recebe um id como parâmetro e use o model Book para buscar esse livro
// Func findByPk retorna Id solicitado no endpoint
const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

// No service BooksService crie um método create que recebe um objeto com os atributos:
// title, author, pageQuantity e salve um novo livro utilizando o model Book.

const create = async ({title, author, pageQuantity}) => {
  const newData = await Book.create({title, author, pageQuantity})
  return newData;
};

// service BooksService crie um método update que recebe dois parâmetros: 
// o id do livro a ser alterado e um objeto com os atributos:
//  title, author, pageQuantity e atualize o livro utilizando o model Book.

const update = async (id, {title, author, pageQuantity}) => {
  const updateBook = await Book.update(
    {title, author, pageQuantity},
    { where: { id } })
    return updateBook;
}

// No service BooksService crie um método remove que recebe o id 
// do livro a ser removido e remova o mesmo utilizando o model Book.
// Func destroy para remover um book no SERVICE

const remove = async (id) => {
  const removeBook = await Book.destroy({ where: { id } });
  return removeBook;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};