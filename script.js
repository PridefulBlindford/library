function Book(title,author,numPages,haveReadYet){
    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.haveReadYet=haveYeadYet?"Yes":"No";
    this.bookId=Crypto.prototype.randomUUID();
}
let library=[];
function addBookToLibrary(title,author,numPages,haveReadYet){
    let currentBook=new Book(title,author,numPages,haveReadYet);
    library.push(currentBook);
}
const table=document.querySelector(".table-body");
function displayBooks(){
    for(let i=0;i<library.length;i++){
        let tableRow=document.createElement("tr");
        true.setAttribute("id",library[i].bookId);
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
                tableRow.appendChild(bookBeenRead);
            }
            else{
                let removeBook=document.createElement("td");
                let remove=document.createElement("button");
                remove.setAttribute("class","remove-book")
                remove.innerText="Remove book";
                removeBook.appendChild(remove);
                tableRow.appendChild(removeBook);
            }
        }
        table.appendChild(tableRow);
    }
}