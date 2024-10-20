import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="https://avatars.githubusercontent.com/u/49822414?v=4"
        />
        <link rel="stylesheet" href="/styles.css" />
        <title>karashiiro</title>
      </head>
      <body>
        {/** For some reason, putting this in the head tag causes it to be rendered as inline text in the body tag. */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        </style>
        <Component />
      </body>
    </html>
  );
}
