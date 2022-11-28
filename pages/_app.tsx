import "@master/css";
import "@master/normal.css";

import type { AppProps } from "next/app";
import {
  Source_Serif_Pro as PublicSans,
  Fira_Code as FiraCode,
} from "@next/font/google";

const publicSans = PublicSans({
  weight: "400"
});
const firaCode = FiraCode();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={(publicSans.className, firaCode.className)}>
      <Component {...pageProps} />
    </main>
  );
}
