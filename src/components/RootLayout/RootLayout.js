import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

function graphQLFetcher(graphQLParams) {
  return fetch('https://us-west-2.api.scaphold.io/graphql/qtt', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const RootLayout = () => <GraphiQL fetcher={graphQLFetcher} />;
export default RootLayout;
