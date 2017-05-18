import Student from '../models/student';
// import cuid from 'cuid';
// import slug from 'limax';
// import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getStudents(req, res) {
  Student.find().exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addStudent(req, res) {
  /*
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
  */
  return res.json({ "message":"posted" })
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getStudent(req, res) {
  // Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ post });
  // });
  return res.json({"message":"got student"})
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteStudent(req, res) {
  /*Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });*/
  return res.status(200).end();
}
