import * as React from "react";

export const VerificationEmail = ({
  name,
  code,
  serviceFor
}: {
  name: string;
  code: string;
  serviceFor: string;
}) => (
  <div
    style={{
      fontFamily: "Helvetica, Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "40px 20px",
      color: "#333"
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h2 style={{ color: "#2c3e50", marginBottom: "10px" }}>
        {serviceFor === "emailService"
          ? "Verify your email address"
          : "Reset your password"}
      </h2>
      <p style={{ fontSize: "16px", margin: "10px 0" }}>
        Hello <strong>{name}</strong>,
      </p>
      <p style={{ fontSize: "16px", margin: "10px 0" }}>
        {serviceFor === "emailService"
          ? "Use the following verification code to complete your sign up:"
          : "Use the following verification code to reset your password:"}
      </p>
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          letterSpacing: "4px",
          color: "#007bff",
          margin: "20px 0",
          textAlign: "center"
        }}
      >
        {code}
      </div>
      <p style={{ fontSize: "14px", color: "#888", margin: "10px 0" }}>
        This code is valid for <strong>5 minutes</strong>.
      </p>
      <p style={{ fontSize: "14px", color: "#888", margin: "10px 0" }}>
        If you did not request this, you can safely ignore this email.
      </p>
    </div>
  </div>
);
