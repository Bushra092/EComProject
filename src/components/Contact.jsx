import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2>Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61291.984673425475!2d74.5641008028482!3d16.23333643531311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0bdf23a1854cb%3A0x2e837fcbd0dc8c59!2sHukkeri%2C%20Karnataka%20591309!5e0!3m2!1sen!2sin!4v1721993225392!5m2!1sen!2sin"
        width="90%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            // action="https://formspree.io/f/xeqdgwnq" //this site is not available now
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="user name"
              required
            />

            <input type="email" name="Email" placeholder="Email" required />

            <textarea
              placeholder="Enter your message "
              name="message"
              col={30}
              rows={10}
              required
            ></textarea>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
