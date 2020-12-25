import Link from "next/link";
import Head from "next/head";
import React from "react";
import s from "./../styles/Layout.module.css";

export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={s.layout}>
        <Link href={"/"}>
          <a>
            <h1>ELECTRO</h1>
          </a>
        </Link>
        <Link href={"/about"}>
          <a>
            <h2>О компании</h2>
          </a>
        </Link>
      </div>
      <main>{children}</main>
    </>
  );
}
