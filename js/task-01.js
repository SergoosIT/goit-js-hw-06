const listWithId = document.querySelector('#categories');

const itemEl = listWithId.children;
console.log(`Number of categories: ${itemEl.length}`);

[...itemEl].forEach(item => {
    
    const titleEl = item.querySelectorAll('h2');
    titleEl.forEach(title => {console.log(`Category: ${title.textContent}`)});

    const listElements = item.querySelectorAll('li');
    listElements.forEach(list => { console.log(`Elements: ${listElements.length}`); });
});
