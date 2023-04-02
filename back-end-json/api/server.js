// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("../temp/db.json");
const middlewares = jsonServer.defaults();


server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
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


server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
