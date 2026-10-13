# Directory

> This project hosts links and descriptions of software projects I've created <br/>
> [Live - Ryan's Website Directory](https://directory.ryan-brock.com/)

Screenshots:
![preview](/screenshots/main.png)
![expanded preview](/screenshots/expanded.png)
![professional preview](/screenshots/professional.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)
- [How to Contribute](#-how-to-contribute)

---

## 🧠 What's My Purpose?

This is a server side single-page angular frontend created to host links and descriptions to the other software creations I've made. It was inspired by zuul - which is a backend directory for microservice management

---

## 🚦 How to Use

- `Social Banner` - At the top is a social banner containing buttons that link to my Github, LinkedIn, and BuyMeACoffee
- `Project Slider` - This slider swaps between `Personal` and `Professional` projects
- `Project` - Each project has the following properties
    - (Only `Personal`) Github Readme Link
    - Name (also a link to website, if available)
    - Description - must click to expand/see

Screenshots:
![preview](/screenshots/main.png)
![expanded preview](/screenshots/expanded.png)
![professional preview](/screenshots/professional.png)

---

## 🛠 Technologies

- Framework: `Angular 22`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v24 (see `.nvmrc`)
* Clone [repo](https://github.com/rbrock44/directory)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
    - `ng test` || `npm run test`

---

### Github Hooks

- Build
    - Trigger: On Push to `master`
    - Action(s): Runs tests, builds application, then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Deploys run in CI on push to `master` (see `.github/workflows/deploy.yml`). `npm run deploy` runs the same build locally

---

## 🤝 How to Contribute

Found a typo or a small, obvious fix? Open a PR directly.
Want to change behavior or add something bigger? Open an issue first so we can talk it through before you put in the work.

---
