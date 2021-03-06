# Adonis Starter platform

## Prerequisites
AdonisJS requires Node.js >= 12.0.0, along with npm >= 6.0.0. You can check the version of Node.js and npm by running the following commands.

```
node -v
# v12.14.1

npm -v
# 6.13.7
```

## Start
Clone repository \
Remove .git directory \
Run ```npm -i```

### Packages installed to start up the project
```
npm i @adonisjs/lucid@alpha
npm i @adonisjs/view
npm i @adonisjs/auth@alpha
npm i @adonisjs/shield@alpha
npm i tailwindcss@latest postcss@latest autoprefixer@latest
npm i @tailwindcss/forms
npm i @tailwindcss/aspect-ratio
```

### Invoking packages needed
```
node ace invoke @adonisjs/lucid
node ace invoke @adonisjs/view
node ace invoke @adonisjs/auth
node ace invoke @adonisjs/shield
npx tailwindcss init -p
```


## If you make modifications to Tailwind and need to recompile
```
npx tailwindcss-cli@latest build ./resources/assets/css/tailwind.css -o ./public/assets/tailwind.css
```

## Things I'd still like to add
- [ ] Forgot password links and workflow 
- [ ] Datatables component 
- [ ] Extract more of the dashboard to reusable components 

