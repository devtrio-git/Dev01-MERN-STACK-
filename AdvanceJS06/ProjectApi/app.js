
let div = document.getElementById("userData");
async function getData(){
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        console.log(data.users)

        data.users.forEach(element => {
            div.innerHTML += 
            `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-4">
            <div class="card">
                 <img src=${element?.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${element?.firstName} ${element.lastName}</h5>
                    <p class="card-text">${element.university}</p>
                    <a href="mailto:${element.email}" class="btn btn-primary">${element.email}</a>
                </div>
            </div>
            </div>
            `
        });

    } catch (error) {
        console.log(error)
    }
}

getData();