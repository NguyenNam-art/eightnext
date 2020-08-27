import Head from "next/head";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
function Product(props) {
    let user = props.user;
    let userChi = -user.Chi;
    let tk = user.Thu + userChi;
    let tktextcolor = tk > 0 ? "text-success" : "text-danger";
    return (
        <tr className="text-center">
        <th scope="row">Ngày {user.id}</th>
        <th className="text-success" scope="row">
            {user.Thu}K
        </th>
        <th className="text-danger" scope="row">
            {userChi}K
        </th>
        <th scope="row" className={tktextcolor}>
            {tk}K
        </th>
        </tr>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://5f3255faec833000161370c4.mockapi.io/api/products"
  );
  const users = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}

export default Product;
