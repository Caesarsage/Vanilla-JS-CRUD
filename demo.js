const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
//return a HTMLDocument (not an array)
// console.log(Array.isArray(Array.from(titles)));
//convert to array using Array.from(titles) so we can use the array properties forEach as grtElementById returns an HTMLDocuments

Array.from(titles).forEach(item => {
  console.log(item);
});


const books = document.querySelectorAll('#book-list li .name');
// console.log(book);
//return a NodeList Array
//A NodeList unlike HTMLDocument can be turn into an array or not to access the array properties.
const bookList = document.querySelector('#book-list');

books.forEach(book => {
  book.textContent += '(book title)';
});


//grabbing id of book-list li 2nd child with a class name of 'name <note th space>
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

//============================================== NODES ==============================

const banner = document.querySelector('#page-banner');
// nodeName: returns name of the node
console.log('#page-banner-node-name is: ' + banner.nodeName);
//hasChildNodes() : return true or false if node has any child nodes
console.log('#page-banner has child nodes: ' + banner.hasChildNodes());

// cloneNode() :- helps clone a node and it node childs if we pass true as parameter
const cloneBanner = banner.cloneNode(true)
console.log(cloneBanner);
// console.log('#page-banner-node-name is: ' + banner.nodeName);


//============================================  TRAVERSING THE DOM(parent and children elements) part 1==========
const bookList = document.querySelector('#book-list');

// parentNode and parentElement works similarly to return the parent of the dom node
console.log('the parent node is: ' , bookList.parentNode);
console.log('the parent element is: ' , bookList.parentElement.parentElement);

// while childNodes consider the line breaks(hence text), the .children dont't (recommended) 
console.log(bookList.childNodes);
console.log(bookList.children);




//============================================  TRAVERSING THE DOM(next siblings and prev siblings elements) part 2==========

const bookList = document.querySelector('#book-list');

// while nextSibling consider the line breaks(hence text), the .nextElementSibling dont't (recommended) 
console.log('book list next sibling is: ', bookList.nextSibling);
console.log('book list next sibling is: ', bookList.nextElementSibling);

// while .previousSibling consider the line breaks(hence text), the .previousElementSibling dont't (recommended) 
console.log('book list prev sibling is: ', bookList.previousSibling);
console.log('book list prev sibling is: ', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Tool cool for everyone else '

// =============DOM EVENS===========================
// delete books: mtd 1 
const btns = document.querySelectorAll('#book-list .delete');

btns.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    //get the li parent element of the one(target) clicked
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
    
  })
})
         
// forms change invents