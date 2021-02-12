const movies = [
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Terminator",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dicta in itaque explicabo rerum labore laborum doloribus voluptatum, 
            sit tempora ullam aspernatur ex est incidunt officia iure? Reprehenderit, ad et!
        `,
        imageUrl: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
]

movies.forEach((movie) => {
    const template = `  <div class="col-md-8 my-3">
                            <div class="card">
                                <img src=${movie.imageUrl} class="card-img-top" alt="${movie.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.name}</h5>
                                    <p class="card-text">${movie.description}</p>
                                </div>
                            </div>
                        </div>`;


    document.querySelector("#movies-list").innerHTML += template;

})