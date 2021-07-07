import { TextField, Button } from '@material-ui/core';
import useStyles from './styles.js';

export default function CommentForm() {
  const classes = useStyles();

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
    >
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        style={{ margin: '12px' }}
      />
      <Button
        className={classes.buttonSubmit}
        variant="contained"
        size="small"
        color="secondary"
        style={{ margin: '12px' }}
      >
        Add comment
      </Button>
    </form>
  );
}
