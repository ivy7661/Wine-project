import cors from 'cors';
import jsonServer from 'json-server';
import auth from 'json-server-auth';

const app = jsonServer.create();
const router = jsonServer.router('./db/db.json');

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(cors());
app.use(auth);
app.use(router);

app.listen(3001);

console.log('Server is running on port 3001');
