# GitHub User Finder App 🔍

A simple and elegant web application that allows users to search for GitHub profiles by username and displays key details such as avatar, followers, following, and a direct link to their GitHub profile.

<br/>

🔗 **Live Demo**: [Click to Visit](https://darishaansarii.github.io/github_user_finder_app/)
📁 **Repository**: [GitHub Repo](https://github.com/darishaansarii/github_user_finder_app)

---

## 🚀 Features

* 🔍 Search any GitHub user by username.
* 🖼️ Display user's avatar and login name.
* 👥 Direct links to follower and following lists.
* 🌐 Explore user's GitHub profile in one click.
* 💻 Responsive and clean UI with Bootstrap.
* 🧠 API integration with `https://api.github.com/users/{username}`.

> ⚠️ **Note:** Only those users whose data is available in the GitHub API will be displayed. If the username does not exist, the card will not appear or may return an error in the console.

---

## 🛠️ Built With

* **HTML5** – Structure of the app.
* **CSS3** – Custom styling and animations.
* **Bootstrap 5** – Responsive and modern layout.
* **JavaScript (Vanilla)** – Functionality and API requests.
* **GitHub API** – Data retrieval based on usernames.


## 🧑‍💻 How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/darishaansarii/github_user_finder_app.git
   ```
2. Open `index.html` in your browser, or visit the [Live Site](https://darishaansarii.github.io/github_user_finder_app/).
3. Enter a GitHub username in the input box.
4. Click the **Search** button to see the user's profile.

---

## 📂 Project Structure

```
github_user_finder_app/
├── index.html           # Main HTML file
├── style.css            # Custom styles
├── app.js               # JavaScript logic (API + rendering)
├── .vscode/             # Editor-specific settings
│   └── settings.json    # VS Code configuration
└── README.md            # Project documentation
```

---

## 📌 Responsive Design

The app is fully responsive:

* On screens smaller than **365px**, the input and button stack vertically.
* Bootstrap ensures smooth layout across all device sizes.

---

## 💡 Future Improvements

* Add repository list preview.
* Show user bio, location, and public repo count.
* Handle "user not found" cases with user-friendly messages.
* Add loading spinners or skeleton cards.

---

## 🙌 Acknowledgements

* [GitHub REST API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)
* [Bootstrap 5](https://getbootstrap.com/)
* Inspired by frontend mini projects and GitHub integrations.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - feel free to use, modify, and share.

---

## ✨ Author

**Darisha Ansari**
📧 [darishaansarii@gmail.com](mailto:darishaansarii@gmail.com)
🐙 [GitHub Profile](https://github.com/darishaansarii)

---

Let me know if you'd like me to also include the recommended contents of `.vscode/settings.json` (e.g., formatting preferences, auto-save settings).
