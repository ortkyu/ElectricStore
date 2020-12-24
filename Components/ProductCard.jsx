import styles from '../styles/Home.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'




const useStyles = makeStyles({
  root: {
    minWidth: 275,
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




export default function ProductCard({product}) {
  const classes = useStyles();

if(!product) return <div>No product</div>
return (
<div>
<Head>
                <title>
                  {/* {post.title} | Next.js Blog Example with {CMS_NAME} */}
                </title>
              </Head>
    <div>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {product.title}
        </Typography>
        <Typography variant="h5" component="h2">
        {product.vendor}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}