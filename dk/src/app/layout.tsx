import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer1 from "../components/common/footer/Footer1";
import Providers from "../redux/Provider";
import { url } from "inspector";
import { baseUrl } from "./constant/constant";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "DK Recruitment", template: "%s | DK Recruitment" },
  
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "CNC Machine Operator",
    "Precision CNC Services",
    "CNC Operator Training",
    "CNC Machining Solutions",
    "Skilled CNC Professionals",
    "CNC Production Efficiency",
    "Quality CNC Operations",
    "CNC Machining Expertise",
    "CNC Machine Quality Assurance",
    "Reliable CNC Services",
    "Expert Grinding Services",
    "Precision Grinding",
    "Skilled Grinders",
    "Advanced Grinding Techniques",
    "Grinding Safety Standards",
    "Efficient Grinding Solutions",
    "Grinding Quality Control",
    "Professional Grinding Services",
    "Industrial Grinding Experts",
    "Reliable Grinding Operations",
    "Production Helpers",
    "Manufacturing Support",
    "Production Line Efficiency",
    "Skilled Production Assistants",
    "Reliable Manufacturing Helpers",
    "Production Task Management",
    "Manufacturing Productivity Boost",
    "Versatile Production Support",
    "Production Line Optimization",
    "Trained Production Helpers",
    "Delivery Van Services",
    "Professional Delivery Drivers",
    "Reliable Delivery Partners",
    "Logistics and Delivery Solutions",
    "Timely Delivery Services",
    "Delivery Fleet Management",
    "Safe Delivery Practices",
    "Efficient Delivery Logistics",
    "Customer-Focused Delivery",
    "Delivery Van Rental",
    "Packaging Services",
    "Custom Packaging Solutions",
    "Quality Packaging Materials",
    "Efficient Packaging Operations",
    "Product Packaging Solutions",
    "Secure Packaging Services",
    "Eco-Friendly Packaging",
    "Packaging Process Optimization",
    "Industrial Packaging Services",
    "Reliable Packaging Partners",
    "Skilled Manpower Solutions",
    "Professional Staffing Services",
    "Workforce Solutions Provider",
    "Industry-Specific Staffing",
    "Global Manpower Solutions",
    "Business Support Services",
    "Customized Staffing Solutions",
    "Workforce Enhancement Services",
    "Reliable Staffing Provider",
    "Excellence in Manpower Solutions",
  ],
  
    description:
      "DK Solutions specializes in providing skilled professionals to top companies, offering tailored manpower solutions that empower success and enhance workforce excellence. From CNC Machine Operators and expert Grinders to reliable Production Helpers and professional Delivery Van Drivers, our services are designed to meet diverse industry needs. We also offer comprehensive Packaging Services and professional Cleaning Services to ensure your business operates smoothly and efficiently. Partner with DK Solutions for excellence in staffing and operational support.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <meta name="robots" content="index, follow" /> */}
      <link rel="canonical" href={`${baseUrl}`} />
      {/* <body className={poppins.className}> */}
      <body>
        <Providers>
          <Navbar />
          {children}

          <Footer1 />
        </Providers>
      </body>
    </html>
  );
}
