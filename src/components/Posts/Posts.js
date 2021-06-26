import { useSelector } from 'react-redux';
import SinglePost from './SinglePost/SinglePost.js';
import useStyles from './styles.js';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <SinglePost />
      <SinglePost />
    </>
  );
}
//41
