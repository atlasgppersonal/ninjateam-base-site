import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "pliny/search/algolia.css";
import "remark-github-blockquote-alert/alert.css";
import "katex/dist/katex.css";
import "../css/prism.css"; // Assuming you'll create this file or copy it from the blog project

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
