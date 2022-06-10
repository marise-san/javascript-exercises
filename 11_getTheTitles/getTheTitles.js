const getTheTitles = function () {
    const books = [
        { title: 'Book', author: 'Name' },
        { title: 'Book2', author: 'Name2' }
    ];

    const onlyTitle = books.map(
        function (item, index) {
            return item.title;
        });
    return onlyTitle;
};


console.log(getTheTitles());

// Do not edit below this line
module.exports = getTheTitles;
