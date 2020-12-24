import Link from 'next/link'
import Head from 'next/head'
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function MainLayout({children, title}) {

    const classes = useStyles();

    return (
        <>
            <Head >
                <title>{title} Новости из мира науки и техники</title>
                <meta name="description" content="Самые последние новости из мира науки и техники, открытия, исследования и изобретения" />
                <meta name="yandex-verification" content="5211a82e3d315328" />
                <meta name="google-site-verification" content="v3Eb8IrFkCvDeUzwwccE6HlTfyi8CYbZtm_SmZChmIE" />
                <meta itemProp="image" content="https://img2.akspic.ru/image/29690-struktura-kosmos-tehnologia-elektronnaya_tehnika-tehnologii-1920x1080.jpg" />
            </Head>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    <Link href={'/'}><a> News</a></Link>
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <main>
                {children}
            </main>

        </>
    )
}