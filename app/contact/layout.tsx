import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Applogy",
  description: "Get in touch with Applogy. Have questions or want to collaborate? We'd love to hear from you.",
  openGraph: {
    title: "Contact Us | Applogy",
    description: "Get in touch with Applogy. We'd love to hear from you.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

