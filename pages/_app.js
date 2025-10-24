import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "pliny/search/algolia.css";
import "remark-github-blockquote-alert/alert.css";
import "katex/dist/katex.css";
import "../css/prism.css"; // Assuming you'll create this file or copy it from the blog project

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
