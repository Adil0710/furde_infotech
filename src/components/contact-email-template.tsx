import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    service: string;
  }
  
  export const ContactEmail = ({
    name,
    email,
    phone,
    service,
  }: EmailTemplateProps) => (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Tailwind>
        <Preview>New Message Received</Preview>
        <Body
          className="w-full m-0 p-0"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          <Container className="w-full p-5" style={{ maxWidth: "600px" }}>
            <Section>
              <Text className="font-bold text-2xl mb-4">Service Inquiry</Text>
              <Text className="text-lg mb-2">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-lg mb-2">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-lg mb-2">
                <strong>Phone:</strong> {phone}
              </Text>
              <Text className="text-lg mb-2">
                <strong>Service:</strong> {service}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default ContactEmail;
  