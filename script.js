function Book(title,author,numPages,haveReadYet){
    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.haveReadYet=haveYeadYet?"yes":"no";
    this.bookId=Crypto.prototype.randomUUID();
}
Book.prototype.toggleReadStatus=function(){
    if(this.haveReadYet==="yes"){
        this.haveReadYet="no";
    }
    else{
        this.haveReadYet="no";
    }
}
let library=[];
function addBookToLibrary(title,author,numPages,haveReadYet){
    let currentBook=new Book(title,author,numPages,haveReadYet);
    library.push(currentBook);
}
const table=document.querySelector(".table-body");
function displayBooks(){
    let tableRows=Array.from(document.querySelectorAll("tr"));
    let tableRowIDs=[];
    tableRows.forEach((tableRow)=>{
        tableRowIDs.push(tableRow.getAttribute("id"));
    });

    
    for(let i=0;i<library.length;i++){
        if(tableRowIDs.indexOf(library[i].bookId)!==-1){
            continue;
        }
        let tableRow=document.createElement("tr");
        tableRow.setAttribute("id",library[i].bookId);
        for(let j=1;j<=5;j++){
            if(j === 1){
                let bookTitle=document.createElement("td");
                bookTitle.innerText=`${library[i].title}`;
                tableRow.appendChild(bookTitle);
            }
            else if(j === 2){
                let bookAuthor=document.createElement("td");
                bookAuthor.innerText=`${library[i].author}`;
                tableRow.appendChild(bookAuthor);
            }
            else if(j === 3){
                let bookPages=document.createElement("td");
                bookPages.innerText=`${library[i].numPages}`;
                tableRow.appendChild(bookPages);
            }
            else if(j===4){
                let bookBeenRead=document.createElement("td");
                bookBeenRead.innerText=`${library[i].haveReadYet}`;
                let readBookButton=document.createElement("button");
                removeButtons.inneerText="Change read state";
                readBookButton.addEventListener("click",()=>{
                    library[i].toggleReadStatus();
                });
                bookBeenRead.appendChild(readBookButton);
                tableRow.appendChild(bookBeenRead);
            }
            else{
                let removeBook=document.createElement("td");
                let remove=document.createElement("button");
                remove.setAttribute("class","remove-book");
                remove.setAttribute("id",`${library[i].bookId}`);
                remove.innerText="Remove book";
                removeBook.appendChild(remove);
                tableRow.appendChild(removeBook);
            }
        }
        table.appendChild(tableRow);
    }
}
let addNewBook=document.querySelector(".new-book");
let newBookForm=document.querySelector("form");
addNewBook.book.addEventListener("click",()=>{
    Event.preventDefault();
    let bookFormData=new FormData(newBookForm);
    let newBookData=Object.fromEntries(bookFormData);
    addBookToLibrary(bookFormData.get("book-title"),bookFormData.get("book-author"),bookFormData.get("page-number"),bookFormData.get("rad-book"));

});
let removeButtons=Array.from(document.querySelectorAll(".remove-button"));
removeButtons.forEach((removeButton)=>{
    removeButton.addEventListener("click",()=>{
        let tableRows=Array.from(document.querySelectorAll("tr"));
        let currentTableRow=tableRows[tableRows.indexOf(removeButton.getAttribute("id"))];
        currentTableRow.remove();
    });
});