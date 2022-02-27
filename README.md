[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<h1 align="center">Project PaySe</h1>

![Main Page](https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/5e79796f6c5e448d979a181b7237b6f7/projects/da92d502df184e2fabfe119da7abce05/1d50cd61-a5ac-4c61-a774-0370b347cd85.png)


## ℹ️ What is PaySe?
PaySe is a platform that proposes a way to implement AA framework using Setu API & Leverage AI/ML models to prevent consent frauds alongside providing credit to the unbanked using Alternate Data.

## ✨ What problem does PaySe solves?
Almost 90 percent of small businesses in India still have no links with formal financial institutions.
Primary reasons are :

- For _**Borrowers**_: <br>
The current lending process is quite tedious for a small business owner with intensive manual under-writing.
This leads to higher turnaround times to even get to an answer whether the customer is eligible or not.
Unbanked users find it very difficult to apply for loan since there is no check for creditworthiness.

- For _**Lenders**_: <br>
Banks continue to lose customers to bigger competitors banks, newer banks & now fin-tech companies.
Unable to get accurate creditworthiness of unbanked users because of lack of data

## 😵‍💫 Challenges we ran into
Find the alternate dataset and creating it with the correct target column for the supervised learning model was a little tough but we overcame those hurdles
We faced issues initially while integrating Setu Account Aggregator API, but by following the docs we were able to do it.

## 🛠️ How we built it?
- The Frontend is built using **Next.js** & **Chakra UI**
- **Firebase Authentication** to authenticate the user via oAuth
- **Firebase Firestore** as our database to store data
- **SETU APIs** to implement Account Aggregator and Consent Request functionalities
- **Express.js** in-order to call the SETU APIs
- **Flask**, **Tensorflow** and **scikit-learn** library to implement Machine Learning models

## 🚀 Interested to contribute to PaySe?

`Contributions are welcome 🎉🎉`

Please refer to the project's style and contribution guidelines for submitting
patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

## ⚙️ Local Project Setup
1. Frontend Setup
    - cd `Project-PaySe`
    - run `yarn install` or `npm install`
    - then run `yarn dev` or `npm run dev`
    - Open `http://localhost:3000`
2. Backend Setup
    - cd `Project-PaySe/server`
    - run `yarn install` or `npm install`
    - then run `yarn start` or `npm start`
    - The Express server will be running in port `5000`
3. ML Setup
    - cd `Project-PaySe/ML`
    - run `pip install virtualenv`
    - create a virtual environment using `pip` - `virtualenv credit`
    - `credit\Scripts\activate` to activate the virtual env
    - run `pip install -r requirements.txt`
    - run `python app.py`

## 💎 Built By:
![Team Nutella Description](https://res.cloudinary.com/pritish007/image/upload/v1645991214/Phone_Pe_lffmsf.png)


[contributors-shield]:
  https://img.shields.io/github/contributors/alpana02/Project-PaySe?style=for-the-badge
[contributors-url]:
  https://github.com/alpana02/Project-PaySe/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/alpana02/Project-PaySe?style=for-the-badge
[forks-url]: https://github.com/alpana02/Project-PaySe/network/members
[stars-shield]:
  https://img.shields.io/github/stars/alpana02/Project-PaySe?style=for-the-badge
[stars-url]: https://github.com/alpana02/Project-PaySe/stargazers
[issues-shield]:
  https://img.shields.io/github/issues/alpana02/Project-PaySe?style=for-the-badge
[issues-url]: https://github.com/alpana02/Project-PaySe/issues
[license-shield]:
  https://img.shields.io/github/license/alpana02/Project-PaySe?style=for-the-badge
[license-url]: https://github.com/alpana02/Project-PaySe/blob/main/LICENSE
