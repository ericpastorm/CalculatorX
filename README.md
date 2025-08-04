# CalculatorX ✨

A modern, feature-rich web calculator built with a clean, responsive UI and a focus on a great user experience. This project was developed using modern web technologies like Vite and Tailwind CSS, resulting in a fast, efficient, and highly customizable application.

### ➡️ [Live Demo](https://github.com/ericpastorm/CalculatorX) ⬅️

---

## 📋 Features

This isn't just a basic calculator. It includes a variety of features designed for a better user experience:

* **Standard Arithmetic Operations:** Perform addition, subtraction, multiplication, and division.
* **Dual-Theme Interface:** Toggle between a sleek dark mode and a clean light mode. Your preference is saved in your browser's local storage!
* **Operation History:** The last completed calculation is always visible for quick reference.
* **Full Keyboard Support:** Use your physical keyboard for all inputs, including numbers, operators, and functions like `Enter` (calculate), `Backspace` (delete), and `Escape` (clear).
* **Advanced Operations:** Includes percentage (`%`) and sign change (`+/-`) functionalities.
* **Responsive Design:** A great user experience on both desktop and mobile devices.
* **Modern UI:** Built with Tailwind CSS for a utility-first, clean design, and enhanced with custom icons from the Lucide icon set.
* **Animated Background:** A subtle, animated gradient background adds a touch of visual flair.

---

## 🛠️ Tech Stack

* **Vite:** For a blazing-fast development experience and an optimized build process.
* **Tailwind CSS:** A utility-first CSS framework for rapid and consistent UI development.
* **Vanilla JavaScript (ES6+):** All logic is handled with modern, clean JavaScript without any external frameworks.
* **Lucide Icons:** For clean, lightweight, and consistent icons.
* **GitHub Pages:** For deployment.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes `npm`) installed on your machine.

### Installation & Usage

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/ericpastorm/CalculatorX.git](https://github.com/ericpastorm/CalculatorX.git)
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd YourRepoName
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

---

## 📦 Deployment

This project is configured for easy deployment to GitHub Pages.

1.  Make sure the `base` property in `vite.config.js` matches your repository name (e.g., `base: '/YourRepoName/'`).
2.  Run the deploy script:
    ```sh
    npm run deploy
    ```
    This command will build the project and push the contents of the `dist` folder to the `gh-pages` branch, which is then served by GitHub Pages.

---

## 🔮 Future Feature: Test Mode

The next major feature planned for Calculator++ is an interactive **"Test Mode"** designed to help users practice their math skills.

In this mode, the calculator will:
1.  Automatically generate simple arithmetic problems (e.g., `15 * 3 = ?`).
2.  Display the problem on the screen.
3.  Allow the user to input their answer using the calculator keys.
4.  Check if the user's answer is correct and provide immediate feedback.
5.  Keep track of a score or a streak of correct answers.

This will transform the calculator from a simple tool into an engaging educational app.

---

## 👤 Author

**Eric Pastor**
* Portfolio: [ericpastor.vercel.app](https://ericpastor.dev/)
* GitHub: [@ericpastorm](https://github.com/ericpastorm)

---

## 📄 License

This project is licensed under the MIT License.