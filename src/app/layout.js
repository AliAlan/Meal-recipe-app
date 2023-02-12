import { Navbar } from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className="select-none min-h-screen"
        style={{ background: "#F2EEE9" }}
      >
        {/* NAVBAR*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
