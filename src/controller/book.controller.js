const BookService = require('../service/book.service');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

// No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro 
// de rota e buscar o livro por meio do service. 
// Se o livro não existir a resposta da requisição deve ter o status 404 e o json { "message": "Book not found" }.

const getById = async (req, res) => {
  const id  = req.params;
  const book = await BookService.getById(id)
  if (!book) {
    res.status(404).json({"message": "Book not found"})
  } else {
    res.status(200).json(book)
  }
}

// No controller BooksController crie o método create sendo um middleware que recebe os atributos:
// title, author, pageQuantity do body da requisição e salve os dados por meio do service.

const create = async (req, res) => {
  const {title, author, pageQuantity} = req.body;
  const newData = await BookService.create({title, author, pageQuantity})
  return res.status(201).json(newData)
}

// No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota 
// e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. 
// A requisição deve retornar o status 200 e a mensagem ‘Book updated!’. 
// Se o livro não for encontrado retornar a mensagem ‘Book not found!’.

const update = async (req, res) => {
  const id = req.params;
  const {title, author, pageQuantity} = req.body;
  const updateBook = await BookService.update({title, author, pageQuantity},
    { where: { id } })
  if(!updateBook) {
    req.status(404).json({message: "Book not found!"})
  } else {
    req.status(201).json({message: "Book update!"})
  }
}

// No controller BooksController crie o método remove sendo um middleware que recebe o id 
// como parâmetro de rota e remova o livro por meio do service.
// Func remove no CONTROLLER

const remove = async (req, res) => {
  const id = req.params;
  const removeBook = await BookService.remove(id);
  if (!removeBook) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json({ message: 'Book removed' });

}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};