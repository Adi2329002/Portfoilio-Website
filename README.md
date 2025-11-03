# 🚀 Aditya Alok's Personal Portfolio

Welcome to the official repository for my personal portfolio website. This project was built from scratch using React.js and modern CSS to showcase my skills, projects, and professional experience to the world.

## 📸 Website Preview

![Alt text](home.png)

---

## 📝 About This Project

This is a single-page application (SPA) designed to be a clean, professional, and responsive "digital business card." It details my journey as a software developer, the technologies I'm passionate about, and the projects I've built.

This project was a fantastic learning experience in building a complete React application from the ground up, managing component structure, and styling with modern CSS techniques.

---

## ✨ Key Features

* **Single-Page Application (SPA):** A smooth, fast user experience with no page reloads.
* **Responsive Design:** Looks great on all devices, from mobile phones to desktops.
* **Component-Based Structure:** Built with modular and reusable React components for the `Navbar`, `Hero`, `Skills`, `About Me`, `Projects`, and `Contact` sections.
* **Scroll-to-Section:** The navigation bar allows for smooth scrolling to any part of the page.
* **Modern CSS Styling:** Styled from scratch with pure CSS, using **Flexbox** and **CSS Grid** to create complex, responsive layouts.
* **Functional Contact Form:** A "Get in Touch" form that securely sends messages directly to my personal email using **EmailJS**, with no backend server required.

---

## 🛠️ Technology Stack

This project was built using a modern, front-end technology stack.

| Technology | Description |
| :--- | :--- |
| **React** | ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) <br> The core library for building the entire user interface. This project is built from the ground up using React Components, Props, and the powerful `useState` hook to manage the contact form's state. |
| **Vite** | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) <br> Our blazing-fast development server and build tool. Vite provides an instant-refresh dev experience (HMR) and bundles the project into a highly optimized `dist` folder for production. |
| **JavaScript** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) <br> All logic, including form handling, state management, and DOM interaction, is written in modern ES6+ JavaScript. |
| **HTML5 & CSS3** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) <br> JSX was used to write the HTML structure. All styles were custom-written, using **Flexbox**, **CSS Grid**, and **Pseudo-elements** (`::before`, `::after`) to create the layouts and decorative lines. |
| **EmailJS** | ![EmailJS](https://img.shields.io/badge/EmailJS-Used-brightgreen) <br> Powers the "Get in Touch" form. This third-party service securely sends the form data to my personal email without requiring a backend, making the portfolio fully static and free to host. |

---

## 🚀 Setup and Installation

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Adi2329002/my-portfolio.git](https://github.com/Adi2329002/my-portfolio.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd my-portfolio
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up your EmailJS keys:**
    * Create a file named `.env` in the root of the project.
    * Add your keys from EmailJS (make sure they are prefixed with `VITE_`):
    ```env
    VITE_SERVICE_ID=your_service_id_here
    VITE_TEMPLATE_ID=your_template_id_here
    VITE_PUBLIC_KEY=your_public_key_here
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Your site will be running on `http://localhost:5173/`!

---

## 🧑‍💻 Author

Built with ❤️ by **Aditya Alok**.

* [**LinkedIn**](https://www.linkedin.com/in/aditya-alok-bbb310299/)
* [**GitHub**](https://github.com/Adi2329002)
