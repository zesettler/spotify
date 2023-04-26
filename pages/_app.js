// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';
// import "tailwindcss/tailwind.css";
// import { RecoilRoot } from "recoil";

// function App({ Component, pageProps: {session, pageProps} }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <RecoilRoot>
//         <Component {...pageProps} />
//       </RecoilRoot>
//     </SessionProvider>
//   );
// }

// export default App;

import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;