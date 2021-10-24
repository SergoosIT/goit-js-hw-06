const items = document.querySelectorAll('.item');
console.log(`Number of items: ${items.length}`);

items.forEach((item) => {
  const titles = item.firstElementChild;
  console.log(`Category: ${titles.textContent}`);

  const items = item.lastElementChild.children;
  console.log(`Elements: ${items.length}`);
});