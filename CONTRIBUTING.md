![hacktoberfest-2023](https://github.com/SxxAq/TodoWebApp/assets/98530202/72b3ed9f-973c-4e91-b2fa-d4b40d9417fd)

# Contributing to TodoWebApp - Your First Open Source Contribution Guide
Welcome to the TodoWebApp open-source project! We are excited that you want to make your first contribution to open source. This guide will walk you through the steps to get started and make your first pull request (PR).

## Your First Contribution

### Finding an Issue

1. **Explore the issues:** Visit the [Issues](https://github.com/JasonEtco/todo) tab of this repository to find issues that are labeled as "beginner-friendly," "good first issue," or something similar. These issues are suitable for beginners.

2. **Select an issue:** Choose an issue that interests you and seems manageable. Click on the issue to get more details.

### Setting Up Your Development Environment

1. **Fork the repository:** Click the "Fork" button at the top right corner of this repository to create your own copy of the project in your GitHub account.

2. **Clone your fork:** Clone your forked repository to your local machine using the following command, replacing `<your-username>` with your GitHub username:

   ```bash
   git clone https://github.com/<your-username>/TodoWebApp.git
   ```

3. **Navigate to the project directory:**

   ```bash
   cd TodoWebApp
   ```

4. **Set up upstream:** To keep your forked repository in sync with the original project, add a remote called "upstream" with this command:

   ```bash
   git remote add upstream https://github.com/SxxAq/TodoWebApp.git
   ```

### Making Changes

1. **Create a new branch:** Create a new branch for your work with a descriptive name. For example:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Code:** Make the necessary changes or improvements to the project. You can use your preferred code editor.

3. **Test your changes:** If possible, test your changes to ensure they work as expected.

4. **Commit your changes:** Commit your changes with a clear and descriptive commit message:

   ```bash
   git commit -m "Add your descriptive commit message here"
   ```

### Submitting Your Contribution

1. **Push your changes:** Push your changes to your GitHub repository:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a pull request:** Go to the Pull Requests tab of the original repository. Click the "New Pull Request" button.

3. **Compare changes:** Ensure that the "base repository" is set to `SxxAq/TodoWebApp` and the "base" branch is `main`. In the "compare" section, select your branch (`feature/your-feature-name`).

4. **Submit the pull request:** Provide a descriptive title and description for your PR. Click the "Create Pull Request" button.

## Review and Merge

- **Review:** Your PR will be reviewed by the project maintainers. They may provide feedback or request changes.

- **Address feedback:** If changes are requested, make the necessary updates and push them to your branch. The PR will be updated automatically.

- **Merge:** Once your PR is approved, a project maintainer will merge it into the main repository.

## Congratulations!

You've made your first open-source contribution and successfully created your first pull request. Thank you for your contribution to the TodoWebApp project!

Happy coding! 🚀
