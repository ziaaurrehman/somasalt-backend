import Providers from "../context/Providers";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
