# Employee-Registry

An employee management application that:

* Registration page so every employee can register itself
Employee must login before being able to use the application
Landing page as overview of existing employees

* A logged in employee can add another employee
Ability to import employees over a CSV file


* Being able to edit and delete employees

* Add and display comments to employees on employee detail page
* Display author and date of the comment

# Features 

* Backend : The app Use Atlas Could by MongoDB and ExpressJS. 
* Frontend : React and others dependencies.
* Docker file.

# How it Works

```bash
cd /path/to/Root/APP

docker build -t myemployee .

``` 

```bash
docker run -p 8787:8787 -it myemployee
``` 


## Tree

```bash
.
├── app.js
├── bin
│   └── www
├── db
│   └── config.db.js
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── comment.js
│   ├── deleteuser.js
│   ├── home.js
│   ├── index.js
│   ├── profile.js
│   ├── signin.js
│   ├── signup.js
│   ├── upload.js
│   └── users.js
├── static
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.test.js
│   │   ├── Auth.js
│   │   ├── Components
│   │   │   ├── AddLoggedUser.js
│   │   │   ├── ButtonAddUser.js
│   │   │   ├── Comments.js
│   │   │   ├── Employees.js
│   │   │   ├── HeaderLoggedUser.js
│   │   │   ├── HeaderNav.js
│   │   │   ├── ImportCSVui.js
│   │   │   ├── InputForm.js
│   │   │   ├── InsertComment.js
│   │   │   └── Toolbar.js
│   │   ├── Context
│   │   │   └── AddUserContext.js
│   │   ├── Home.js
│   │   ├── index.css
│   │   ├── logo.svg
│   │   ├── Profile.js
│   │   ├── reportWebVitals.js
│   │   ├── service-worker.js
│   │   ├── serviceWorkerRegistration.js
│   │   ├── setupTests.js
│   │   └── Views
│   │       ├── Home
│   │       │   └── index.js
│   │       ├── Profile
│   │       │   └── index.js
│   │       └── Registration
│   │           ├── index.js
│   │           ├── signin.js
│   │           └── signup.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── tmp
└── views
    ├── error.ejs
    └── index.ejs
```


