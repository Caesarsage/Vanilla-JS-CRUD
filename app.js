document.addEventListener('DOMContentLoaded', ()=>{

  // DELETE BOOKs: method 2: (RECOMMENDED)
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e)=>{
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    // li.parentElement.removeChildd(li) OR Use list (as that's our parent node)
    list.removeChild(li)
  }
});

// interacting with forms: ADD BOOKS
//use document.forms['the form id goes here'];
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  // grab form input['text] of text from the addForm
  const value = addForm.querySelector('input[type="text"]').value;
  
  // create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn =document.createElement('span');

  // append to DOM
  li.appendChild(bookName)
  li.appendChild(deleteBtn)
  list.appendChild(li)

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //add content
  deleteBtn.textContent ='  delete';
  bookName.textContent = value;
});

// HIDE BOOKS with checkbox
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', (e)=>{
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block"
  }  
});

//FILTER /SEARCH BOOKS
const searchBox = document.forms['search-books'].querySelector('input');

searchBox.addEventListener('keyup', (e)=>{
  const term = e.target.value.toLowerCase()
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(book =>{
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    }else{
      book.style.display = 'none'
    }
  })
})

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e)=>{
  if (e.target.tagName === "LI") {
   const targetTab = e.target;
   const targetPanel = document.querySelector(targetTab.dataset.target)
   
   panels.forEach(panel =>{
     if (panel === targetPanel) {
      panel.classList.add('active');
     }else{      
      panel.classList.remove('active');
     }
   }) 
  }

})

})