import styles from '../styles/Home.module.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import Link from 'next/link'
import CardMedia from '@material-ui/core/CardMedia';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    maxHeight: 300
  },
  media: {
    height: 5,
    width: 300,
    paddingTop: '56.25%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




export default function ProductList({arrayProduct}) {
  const classes = useStyles();



  return (
<div>
  {arrayProduct.map(d=>
  <Link href={{
    pathname: '/catalog/[id]',
    query: { id: d.id },
  }}
  //href={`/catalog/[id]`} as={`/catalog/${d.id}`}
  >
    <div>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={d.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {d.title}
        </Typography>
        <Typography variant="h5" component="h2">
        {d.vendor}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography> */}
      </CardContent>
    </Card>
    </div>
    </Link>
    )}
    </div>
  )
}