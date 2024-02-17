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

app.post('/v1/api/uservalid', (req, res) => {
  const requestData = req.body; // Get the data from the request
  const getUsers = app.db.read().get('users').value();

  if (getUsers && getUsers.length > 0) {
    const user = getUsers.find((item) => item.email === requestData.email && item.phone === requestData.phone && item.role === 'user');
    if (user) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        phone: user.phone
      });
    } else {
      res.status(401).json({ message: '查無此會員' });
    }
  } else {
    res.status(401).json({ message: '查無此會員' });
  }
});

app.use(router);

app.listen(3001);

console.log('Server is running on port 3001');
