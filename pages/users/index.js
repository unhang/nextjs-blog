import React, { useEffect, useState } from "react";
import Head from "next/head";

import Layout from "../../components/layout";

export default function User({ users }) {
  return (
    <>
      <Head>
        <title>Users list</title>
      </Head>
      <main>
        {users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <div>{user.email}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  let users = [];
  users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      users: users,
    },
  };
}
