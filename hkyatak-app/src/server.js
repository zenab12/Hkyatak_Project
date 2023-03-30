const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);


server.post('/posts', (req, res) => {
  const db = router.db;
  const { title, body,imageUrl,videoUrl,tags,userId } = req.body;
  const id = Date.now().toString();
  tags = tags.split(",");
  const post = { id, title, body,imageUrl,videoUrl,tags,userId };
  db.get('posts').push(post).write();
  res.json(post);
});


const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
