class Book 
{
    #title;
    #author;
    #category;
    #summary;
    #cover;
    
    constructor (title, author, category, summary, cover)
    {
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#summary = summary;
        this.#cover = cover;
    }
    
    //GETTERS
    get title()
    {
        return this.#title;
    }
    
    get author()
    {
        return this.#author;
    }
    
    get category()
    {
        return this.#category;
    }
    
    get summary()
    {
        return this.#summary;
    }
    
    get cover()
    {
        return this.#cover;
    }
    
    //SETTERS
    set title (newTitle)
    {
        this.#title = newTitle;
    }
    
    set author (newAuthor)
    {
        this.#author = newAuthor;
    }
    
    set category (newCat)
    {
        this.#category = newCat;
    }
    
    set summary (newsummary)
    {
        this.#summary = newsummary;
    }
    
    set cover (newCover)
    {
        this.#cover = newCover;
    }
}


export {Book};