import Link from 'next/link'
import Head from 'next/head'
import React from "react";
import s from "./../styles/Layout.module.css"




export default function MainLayout({children, title}) {


    return (
        <>
            <Head >
                <title>{title} Новости из мира науки и техники</title>
                <meta name="description" content="Самые последние новости из мира науки и техники, открытия, исследования и изобретения" />
                <meta name="yandex-verification" content="5211a82e3d315328" />
                <meta name="google-site-verification" content="v3Eb8IrFkCvDeUzwwccE6HlTfyi8CYbZtm_SmZChmIE" />
                <meta itemProp="image" content="https://img2.akspic.ru/image/29690-struktura-kosmos-tehnologia-elektronnaya_tehnika-tehnologii-1920x1080.jpg" />
            </Head>
            <div className={s.layout}>
            <Link href={'/'}><a><h1>ELECTRO</h1></a></Link>
            </div>
            <main>
                {children}
            </main>

        </>
    )
}