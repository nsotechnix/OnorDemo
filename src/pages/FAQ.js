import React from "react";
import "./FAQ.css";
import { border, Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Container } from "react-bootstrap";

function FAQ() {
  return (
    <Container>
      <Stack
        className="mobile-view"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Box className="faq-main-title" style={{ fontFamily: "Inter" }}>
          Frequently asked questions
        </Box>

        <Accordion
          allowToggle
          className="accItem"
          style={{
            marginTop: "39px",
          }}
        >
          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                What is the Onor Makeup Experience?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              The Onor Makeup Experience is a virtual makeup experience like no
              other, we have studied hundreds of makeup sessions delivered
              online and offline and designed the best Customer Experience for
              you. Here are the parts that makes it so unique:
              <ul>
                <li style={{ margin: "10px 0px" }}>
                  <span style={{ color: "black", fontWeight: "800" }}>
                    {" "}
                    Onor 1 click connect:
                  </span>{" "}
                  With Onor you are just 1 click away from connecting with an
                  expert Makeup artist for a free video consult. Do not waste
                  time on forums or video sites - just talk to an expert who can
                  immediately assess your skin and answer your questions
                  immediately.
                </li>
                <li style={{ margin: "10px 0px" }}>
                  <span style={{ color: "black", fontWeight: "800" }}>
                    Onor Consult:
                  </span>{" "}
                  During the Onor Consult our expert Makeup artist assesses your
                  skin type, tone and hue as well as your goals to recommend the
                  best makeup session and plan for you. The artist will also try
                  and answer any queries you might have about makeup
                  application, products and skin etc.
                </li>
                <li style={{ margin: "10px 0px" }}>
                  <span style={{ color: "black", fontWeight: "800" }}>
                    Onor Makeup Session:
                  </span>{" "}
                  Based on your customized recommendations our makeup artist can
                  help you achieve the look of your dreams, exactly as you
                  expected. This is a paid session.
                </li>
              </ul>
              And if you like some of us and are not comfortable with a video
              consult you could just send us 3 pictures of your face taken from
              three different sides (left, right and center) for a customized
              recommendation and plan. Buy a session from us only if you
              absolutely love the plan..
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                What can I expect once my one-on-one consult is completed?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              As a follow up after your Free consultation we will work on a
              personalized plan featuring your ideal selection of products based
              on your skin needs and a step-by-step routine guide on how to
              maximize all of their benefits to achieve a healthy and
              youthful-looking skin. Once the plan is compiled, a paid session
              with Onor’s makeup maestro is scheduled where you’ll receive a
              step-by-step walkthrough on product implementation.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                How accurately can you see my skin characteristics on a webcam?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              Onor’s team has experience in the beauty industry as aestheticians
              and makeup artists for more than 20 years. We’ve been assessing
              skin and guiding women and men alike on how to best care for their
              skin. Whether it be acing the smokey eye look, correcting skin
              issues (like fine lines, wrinkles, dullness, scarring, acne,
              dryness or oiliness) or to help prevent future ones, such as
              hyperpigmentation and anti-aging. By asking you vital questions
              and seeing your skin in both photos (sent to us so we can zoom-in
              problem areas) and through a video call, we are able to easily
              assess and answer your skin concerns.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                What’re the requirements to be able to have a video
                consultation?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              <ul>
                <li style={{ margin: "10px 0px" }}>
                  Click on the “Book a free consult” button and you will be
                  taken to a calendar booking page, choose a time which is
                  convenient for you and enter your contact details to book the
                  consult
                </li>
                <li style={{ margin: "10px 0px" }}>
                  The Onor Customer Experience team will then make sure that the
                  artist is indeed available on the given time and confirm your
                  appointment via an email. The email will also tell you how to
                  prep for your consultation, which will include:
                  <ul>
                    <li style={{ margin: "10px 0px" }}>
                      Having a computer, tablet or cell phone with webcam and
                      microphone assess and a reliable internet connection.
                    </li>
                    <li style={{ margin: "10px 0px" }}>
                      Making sure you are in a well-lit room during your video
                      consultation.
                    </li>
                    <li style={{ margin: "10px 0px" }}>
                      Having your current makeup kit / products on hand for the
                      Onor makeup artist to assess if you have the right
                      products.
                    </li>
                    <li style={{ margin: "10px 0px" }}>
                      We also strongly suggest that you do not have any makeup
                      on for the consult.
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                What languages are available for my consultation?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              For now, we offer you a video consultation in English.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                Should I remove my makeup before my consult?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              In order for our makeup artists to make the best assessment of
              your skin during the video consultation, it is advisable to join
              makeup-free and be in a well-lit room so that any specific issues
              you would like to address can be easily seen. The same applies
              when you are taking the picture that you will upload prior to your
              consultation.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                What is your cancellation policy for a paid video session?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              In the event you need to cancel your appointment, we do request a
              24-hour notice to avoid cancellation fees. We will always do our
              best to avoid charging for cancellations, but please keep in mind
              these one-on-one consultations are by appointment only.
              Appointments canceled within less than 24 hours will not be
              reimbursed.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                How long does a consult last?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              A free consultation takes upto 20 minutes wherein your makeup
              artist tries to assess your skin tone, hue etc., understand your
              goals and charts out a plan / session customized for you. The Onor
              makeup artist will then show you exactly how to put the plan in
              action during the paid makeup session. The paid session usually
              goes on for about 30-60 minutes, or longer based on your needs.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton
              border="none"
              fontSize={[15, 15, 15, 14]}
              className="accordion-btn"
            >
              <Box
                className="faq-title"
                style={{ fontFamily: "Inter" }}
                flex="1"
                textAlign="left"
              >
                Can men receive consultation?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: "orange" }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: "Inter" }}
            >
              Certainly. We’re open for everyone, no matter the gender. We are
              also extremely LGBTQ friendly and in fact have ongoing promotions
              for our brave friends who are trying out makeup for the first
              time.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
}

export default FAQ;
