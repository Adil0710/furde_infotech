import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
    caste: string;
    maritalStatus: string;
    schoolname: string;
    sscyear: string;
    sscmarks: string;
    hscdiplomaname: string;
    hscdiplomadepartment: string;
    hscdiplomayear: string;
    hscdiplomamarks: string;
    graduationname: string;
    graduationdepartment: string;
    graduationyear: string;
    graduationmarks: string;
    pgraduationname: string;
    pgraduationdepartment: string;
    pgraduationyear: string;
    pgraduationmarks: string;
    experience: string;
    courses: string;
    languages: string;
    vehicle: string;
  }
  
  export const ApplicationEmail = ({
    firstName,
    lastName,
    dob,
    gender,
    phone,
    email,
    address,
    caste,
    maritalStatus,
    schoolname,
    sscyear,
    sscmarks,
    hscdiplomaname,
    hscdiplomadepartment,
    hscdiplomayear,
    hscdiplomamarks,
    graduationname,
    graduationdepartment,
    graduationyear,
    graduationmarks,
    pgraduationname,
    pgraduationdepartment,
    pgraduationyear,
    pgraduationmarks,
    experience,
    courses,
    languages,
    vehicle,
  }: EmailTemplateProps) => (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Tailwind>
        <Preview>New Application Received</Preview>
        <Body className="w-full m-0 p-0" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
          <Container className="w-full p-5" style={{ maxWidth: "1500px" }}>
            <Section>
              <Hr />
              <Text className="font-bold text-xl">Personal Details</Text>
              <table width="100%" style={{ fontFamily: "Montserrat, Arial, sans-serif", borderSpacing: 0, marginTop: "10px" }}>
                <tbody>
                  <tr>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>First Name:</strong> {firstName}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Last Name:</strong> {lastName}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Date of Birth:</strong> {dob}</td>
                  </tr>
                  <tr>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Gender:</strong> {gender}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Mobile No.:</strong> {phone}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Email:</strong> {email}</td>
                  </tr>
                  <tr>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Caste:</strong> {caste}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Marital Status:</strong> {maritalStatus}</td>
                    <td width="100%" style={{ padding: "5px 0" }}><strong>Address:</strong> {address}</td>
                  </tr>
                </tbody>
              </table>
              <Hr />
              <Text className="font-bold text-xl">Educational Details</Text>
              <table width="100%" style={{ fontFamily: "Montserrat, Arial, sans-serif", borderSpacing: 0, marginTop: "10px" }}>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ padding: "5px 0" }}><strong>SSC:</strong> {schoolname}</td>
                    <td width="23%" style={{ padding: "5px 0" }}><strong>Passing Year:</strong> {sscyear}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Percentage / CGPA:</strong> {sscmarks}</td>
                  </tr>
                  <tr>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>HSC / Diploma:</strong> {hscdiplomaname}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Department:</strong> {hscdiplomadepartment}</td>
                    <td width="23%" style={{ padding: "5px 0" }}><strong>Passing Year:</strong> {hscdiplomayear}</td>
                    <td width="33%" style={{ padding: "5px 0" }}><strong>Percentage / CGPA:</strong> {hscdiplomamarks}</td>
                  </tr>
                  {graduationname && (
                    <tr>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Graduation:</strong> {graduationname}</td>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Department:</strong> {graduationdepartment}</td>
                      <td width="23%" style={{ padding: "5px 0" }}><strong>Passing Year:</strong> {graduationyear}</td>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Percentage / CGPA:</strong> {graduationmarks}</td>
                    </tr>
                  )}
                  {pgraduationname && (
                    <tr>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Post Graduation:</strong> {pgraduationname}</td>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Department:</strong> {pgraduationdepartment}</td>
                      <td width="23%" style={{ padding: "5px 0" }}><strong>Passing Year:</strong> {pgraduationyear}</td>
                      <td width="33%" style={{ padding: "5px 0" }}><strong>Percentage / CGPA:</strong> {pgraduationmarks}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <Hr />
              <Text className="font-bold text-xl">Professional Details</Text>
              <table width="100%" style={{ fontFamily: "Montserrat, Arial, sans-serif", borderSpacing: 0, marginTop: "10px" }}>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ padding: "5px 0" }}><strong>Experience:</strong> {experience}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ padding: "5px 0" }}><strong>Courses Done:</strong> {courses}</td>
                  </tr>
                  <tr>
                    <td width="50%" style={{ padding: "5px 0" }}><strong>Languages Known:</strong> {languages}</td>
                    <td width="50%" style={{ padding: "5px 0" }}><strong>Own a Vehicle:</strong> {vehicle}</td>
                  </tr>
                </tbody>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default ApplicationEmail;
  