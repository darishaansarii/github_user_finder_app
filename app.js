let input = document.getElementById("inputBox");
let userContainer = document.getElementById("showUser");

const searchUser = async () => {
  try {
    let usernamne = input.value.toLowerCase();
    let api_url = `https://api.github.com/users/${usernamne}`;

    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        userContainer.innerHTML = `<div class="card w-25 github-card" style="width: 18rem;">
                    <img src="${
                      data.avatar_url
                    }" class="card-img-top" alt="avatar">
                    <div class="card-body">
                      <h5 class="card-title">${data.login.toUpperCase()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a href="https://github.com/${data.login}?tab=followers" target="_blank" class="text-decoration-none text-dark">Followers</a></li>
                      <li class="list-group-item"><a href="https://github.com/${data.login}?tab=following" target="_blank" class="text-decoration-none text-dark">Following</a></li>
                    </ul>
                    <div class="card-body btn btn-success w-100">
                      <a href="${
                        data.html_url
                      }" target="_blank" class="text-white text-decoration-none fw-bold btn-font">Expolre on Github</a>
                    </div>
                  </div>`;
      });
  } catch (err) {
    console.log(err);
  }
};
