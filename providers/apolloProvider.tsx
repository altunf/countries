"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";

export default function ApolloProviders({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
