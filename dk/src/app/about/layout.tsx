import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { baseUrl } from "../constant/constant";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "About ", template: "%s | DK Recruitment" },
  // description: "DK Recruitment",
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
  
    "description": "Learn about DK Recruitment, your trusted partner in providing skilled professionals to top companies. Our mission is to connect talented individuals with rewarding career opportunities across various industries. With expertise in CNC Machine Operators, expert Grinders, reliable Production Helpers, professional Delivery Van Drivers, comprehensive Packaging Services, and top-notch Cleaning Services, DK Recruitment is dedicated to enhancing workforce excellence. Discover how our tailored manpower solutions can drive your business success and reliability on a global scale."
  
  ,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < >
      <>{children}</>
    </>
  );
}
