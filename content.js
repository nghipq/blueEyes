var contents = document.getElementById('content').textContent;

var items = contents.split('. ')

function render() {
    var result = items.map(function(item) {
        return item + '. ' + '</br>'
    })
    document.getElementById('content').innerHTML = result.join('')
};

render()
