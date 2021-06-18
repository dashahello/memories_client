import SinglePost from './SinglePost/SinglePost.js';
import useStyles from './styles.js';

export default function Posts() {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <SinglePost />
      <SinglePost />
    </>
  );
}
