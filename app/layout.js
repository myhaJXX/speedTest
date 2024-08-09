import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ReduxProvider from "./redux/Provider";

export const metadata = {
  title: "MJXTyping",
  description: "Test your typing skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <ReduxProvider>
            <Header/>
            {children}
            <Footer/>
          </ReduxProvider>
        </body>
    </html>
  );
}
