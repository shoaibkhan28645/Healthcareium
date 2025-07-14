import "./globals.css";
import { chillax } from "../lib/fonts";
import { Navbar } from "./components/navbar/Navbar";

export const metadata = {
  title: "Home Health Care Services in Pakistan | Nursing, Elderly & Patient Care",
  description: "Reliable home health care services in Pakistan. We offer professional nursing, elderly care, and patient care at home. Our certified caregivers provide 24-hour support, physiotherapy, and specialized care.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  keywords: "home health care, home nursing, elderly care, patient care, physiotherapy, 24-hour nursing, caregiver, Pakistan, Lahore, Karachi, Islamabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chillax.variable} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
