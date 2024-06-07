import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { baseUrl } from "../constant/constant";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Services", template: "%s | DK Recruitment" },
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

  description:
    "Discover the comprehensive staffing solutions offered by DK Recruitment. Our services connect skilled professionals with top companies across various industries. Whether you need CNC Machine Operators, expert Grinders, reliable Production Helpers, professional Delivery Van Drivers, efficient Packaging Services, or dedicated Cleaning Services, DK Recruitment provides tailored manpower solutions to meet your business needs. Partner with us to enhance your workforce and drive business success with excellence and reliability.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>{children}</>
    </>
  );
}
