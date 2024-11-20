var books = [];

books[0] = {
    title: 'Біблія',
    author: '-',
    genre: 'Релігійні',
    pages: 700,
    borrowedDate: new Date('2024-11-19')
};

books[1] = {
    title: 'Тіні забутих предків',
    author: 'Михайло Коцюбинський',
    genre: 'Новела',
    pages: 150,
    borrowedDate: new Date('2024-10-25')
};

books[2] = {
    title: 'Коран',
    author: '-',
    genre: 'Релігійні',
    pages: 400,
    borrowedDate: new Date('2024-10-20')
};

function calculateDaysLeft(borrowedDate) {
    const returnDate = new Date(borrowedDate);
    returnDate.setDate(returnDate.getDate() + 10);
    const currentDate = new Date();
    const daysLeft = Math.ceil((returnDate - currentDate) / (1000 * 60 * 60 * 24));
    return daysLeft;
}

function generateBookRow(book) {
    const daysLeft = calculateDaysLeft(book.borrowedDate);
    const daysLeftText = daysLeft >= 0 ? daysLeft : 'Прострочено';
    
    return `
        <tr style="background-color: ${daysLeft < 0 ? 'lightcoral' : 'white'};">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td>${daysLeftText}</td>
        </tr>
    `;
}

function generateBooksTable() {
    var html = "";
    books.forEach(function(book) {
        html += generateBookRow(book);
    });
    
    document.getElementById('books-table').getElementsByTagName('tbody')[0].innerHTML = html;
}

generateBooksTable();
