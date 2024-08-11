import { icon } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ReduxProvider from "./redux/Provider";
import Favicon from "./public/favicon.ico"

export const metadata = {
  title: "MJXTyping",
  description: "Test your typing skills",
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <ReduxProvider>
            <Header/> {/*contain history*/}
            {children}
            <Footer/> {/*contain theme changer & links*/}
          </ReduxProvider>
        </body>
    </html>
  );
}
