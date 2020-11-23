const getTheTitles = function(books) {
    var titles = books.map(book => book.title);

    return titles;
}

module.exports = getTheTitles;
