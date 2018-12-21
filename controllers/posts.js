import { Post } from '../models';

export default class PostControllers {
  static allPosts(req, res) {
    Post.findAll()
      .then(posts => {
        res.json({ posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static create(req, res) {
    const { title, content, author = 1 } = req.body;
    Post.create({ title, content, author })
      .then(post => {
        res.json({ post });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static find(req, res) {
    const { id } = req.params;
    Post.findById(id)
      .then(post => {
        res.json({ post });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static update(req, res) {
    const { title, content, author } = req.body;
    Post.update(
      { title, content },
      { returning: true, where: { id: req.params.id } }
    )
      .then(post => {
        res.json({ post: post[0][0] });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static delete(req, res) {
    Post.findById(req.params.id)
      .then(post => {
        post.destory();
      })
      .then(() => {
        res.json({ message: 'post deleted', status: 'success' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }
}
