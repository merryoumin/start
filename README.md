bbb# Create React App with Tailwind CSS

---

## When you start

### [Frontend]

> React
>
> > `npx create-react-app .` </br>

> > `npm run start`

> Tailwindcss
>
> > `npm install -D tailwindcss` </br>

> > `npx tailwindcss init`</br>

> > in 'index.css'
> >
> > > ` @tailwind base;@tailwind components; @tailwind utilities;`</br>

> > at 'content' of 'tailwind.config.js'
> >
> > > `"./src/**/*.{js,jsx,ts,tsx}"`

> react-icons</br>
>
> > `npm install react-icons --save` </br>

> > https://react-icons.github.io/react-icons/

> react-router-dom
>
> > `npm install react-router-dom`</br>

> axios
>
> > `npm i axios`

> .env
>
> > make a '.env' file on root</br>
> >
> > > `REACT_APP_BACKEND_URL=http://`</br>

> > add '.env'file at .gitignore

### [Backend]

> npm
>
> > `npm init`</br>
> >
> > > entry point: (index.js) app. js</br>
> > > license: (ISC) MIT
> > > express
>
> > `npm i express`</br>

> nodemon
>
> > ` npm i -D nodemon`</br>

> > in 'package.json' at 'scripts'
> >
> > > `"dev": "nodemon app.js"` </br>

> > `npm run dev`

> cors
>
> > ` npm i cors` </br>

> > at app.js

> > > `app.use(
> > > cors({

    origin: "http://localhost:[yourFrontPort]",
    credentials: true,

})
);`

> prisma
>
> > https://app.planetscale.com/</br>

> > planetscale
> >
> > > `pscale shell dbName main` </br>

> > > `pscale auth login` </br>

> > > `pscale database create [dbName] --region ap-northeast`</br>

> > > `pscale connect [dbName]`</br>

> > `npm i -D prisma`</br>

> > `npx prisma init  ` </br>

> > in 'schema.prisma' of prisma </br>

> > > `generator client {
provider = "prisma-client-js"
}
datasource db {
provider = "mysql"
url = env("DATABASE_URL")
relationMode = "prisma"
}
`

> > make a '.env' file</br>
> >
> > > `DATABASE_URL="mysql://127.0.0.1:[yourPort]/[dbName]"`</br>

> > make a schema at 'schema.prisma' of prisma

> > > `npx prisma db push`</br>

> > > `npx prisma studio`</br>

> > Prisma Client
> >
> > > `npm i @prisma/client`</br>

---

## Git clone start

> `git clone gitAddress` </br> > `git remote -v` </br> > ` git remote remove origin` </br>
> when you want to delete git folder (also delete commit,etc a lot of data)
>
> > `rm -rf .git`</br>

> `npm i`
