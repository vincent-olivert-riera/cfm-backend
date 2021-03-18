# Club Frontenis Mareny - backend

### Build

```
npm install
```

### Run

```
node index.js
```

### Access

http://localhost:5000/graphql

---

### Heroku info

Create env variables:

```
heroku config:set VAR_NAME="value"
```

Use those variables from the app:

```
const varName = process.env.VAR_NAME;
```

Deploy to Heroku:

```
git push heroku main
```
