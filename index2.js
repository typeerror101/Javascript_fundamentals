document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("form").style.display = "block"
})

const Library = []

function Book (author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary (event) {
    event.preventDefault()
    
    let author = document.getElementById("author").value 
    let title = document.getElementById("title").value 
    let pages = document.getElementById("pages").value 
    let read = document.getElementById("read").value 

    const book = new Book(author, title, pages, read)

    Library.push(book)
    console.log(Library)
    displayCard()
}


function createBookCard(book) {
    const card = document.createElement('div')
    card.classList.add('card')

            const titleElement = document.createElement('h2')
            titleElement.textContent = book.title

            // Create author element
            const authorElement = document.createElement('h6')
            authorElement.textContent = `By ${book.author}`

            // Create pages element
            const pagesElement = document.createElement('p')
            pagesElement.textContent = `Number of Pages: ${book.pages}`

            // Create read element
            const readElement = document.createElement('p')
            readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`

            const readBtnElement = document.createElement('button')
            readBtnElement.textContent = 'Read'
            readBtnElement.addEventListener('click', () => {
                book.read = !book.read; // Toggle the 'read' status
                readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
            });
            

            const removeBtnElement = document.createElement('button')
            removeBtnElement.textContent = 'Remove'
            removeBtnElement.addEventListener('click', () => {
                card.parentNode.removeChild(card);
            })


            // Append elements to card
            card.appendChild(titleElement)
            card.appendChild(authorElement)
            card.appendChild(pagesElement)
            card.appendChild(readElement)
            card.appendChild(readBtnElement)
            card.appendChild(removeBtnElement)

            console.log(card)
            return card
}


function displayCard () {
    const container = document.getElementById("container")

    container.innerHTML = ''

    Library.forEach( book => {
        const bookCard = createBookCard(book)
        container.appendChild(bookCard)
    })
}

document.addEventListener('DOMContentLoaded', displayCard)
document.getElementById("form").addEventListener("submit", addBookToLibrary);
