import Head from "next/head";
import React from "react";

type SEOProps = {
  title: string;
  iconHref?: string;
  description: string;
};

export function SEO({
  title = "SEO Title",
  iconHref = "/favicon.svg",
  description = "SEO Description!",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={iconHref} />
    </Head>
  );
}
