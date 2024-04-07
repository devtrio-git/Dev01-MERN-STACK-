// https://reqres.in/api/users?page=1

import User from "../models/user.model.js";
import StorageService from "../service/storage.service.js";

const user_cards_container = document.getElementById('user_card_container');

const fetchUsers = async () => {
    try {
        const res = await fetch(' https://reqres.in/api/users?page=1');
        const body = await res.json();
        const data = body.data.map(user => new User(user));
        return data;

    } catch (error) {
        console.error("Unable to fetch users", error)
    }
}



const renderUsers = async () => {
    const users = await fetchUsers();
    user_cards_container.innerHTML = users.map(user => {
        return (`<div class="card" style="width: 18rem;">
    <img src="${user.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">${user.email}</p>
      <a href="#" class="btn btn-primary">${user.id}</a>
    </div>
  </div>`);
    })

    StorageService.persist_user.set(users);
    const u = StorageService.persist_user.get();
    StorageService.persist_user.set('sdfksdfksfsdf 3234234sdfs sdfsdfsfd');
    const t = StorageService.persist_user.get();
    console.log(u, t);

}

renderUsers();