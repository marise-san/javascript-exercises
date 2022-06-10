const getTheTitles = function (books) {

    const onlyTitle = books.map(
        function (item, index) {
            return item.title;
        });
    return onlyTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
