import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
