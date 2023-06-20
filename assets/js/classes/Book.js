class Book {
    #title;
    #category;
    #author;
    #resume;
    #image;
    
    constructor(title, category, author, resume, image) {
        this.#title = title;
        this.#category = category;
        this.#author = author;
        this.#resume = resume;
        this.#image = image;
    }
    
    get title() {
        return this.#title;
    }
    set title(title) {
        this.#title = title;
    }
    
    get category() {
        return this.#category;
    }
    set category(category) {
        this.#category = category;
    }
    
    get author() {
        return this.#author;
    }
    set author(author) {
        this.#author = author;
    }
    
    get resume() {
        return this.#resume;
    }
    set resume(resume) {
        this.#resume = resume;
    }
    
    get image() {
        return this.#image;
    }
    set image(image) {
        this.#image = image;
    }
}

export {Book};