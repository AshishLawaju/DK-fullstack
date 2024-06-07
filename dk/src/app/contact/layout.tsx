import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { baseUrl } from "../constant/constant";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Contact", template: "%s | DK Recruitment" },
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

    "description": "Get in touch with DK Recruitment to find the perfect staffing solutions for your business or to explore exciting career opportunities. Our team is dedicated to connecting skilled professionals with top companies. Whether you have questions about our services, need assistance with job applications, or want to learn more about how we can support your workforce needs, we're here to help. Contact DK Recruitment today and let's achieve success together."
  
  
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
