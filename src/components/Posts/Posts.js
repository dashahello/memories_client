import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost/SinglePost.js';
import useStyles from './styles.js';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <SinglePost post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
//41
