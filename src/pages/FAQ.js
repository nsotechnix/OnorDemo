import React from "react";
import "./FAQ.css";
import { Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Container } from 'react-bootstrap';

function FAQ() {
  return (
    <Container>
      <Stack
        className="mobile-view"
        style={{ marginTop: '100px', marginBottom: '100px' }}
      >
        <Box
          className="faq-main-title" style={{ fontFamily: 'Inter' }}
        >
          Frequently asked questions
        </Box>

        <Accordion allowToggle className="accItem" style={{
          marginTop: '39px'
        }}>
          <AccordionItem mb="20">
            <AccordionButton border="none" fontSize={[15, 15, 15, 14]} className="accordion-btn">
              <Box className="faq-title" style={{ fontFamily: 'Inter' }} flex="1" textAlign="left">
                Will I get full access to the course after purchasing?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: 'orange' }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton border="none" fontSize={[15, 15, 15, 14]} className="accordion-btn">
              <Box className="faq-title" style={{ fontFamily: 'Inter' }} flex="1" textAlign="left">
                Will I get full access to the course after purchasing?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: 'orange' }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton border="none" fontSize={[15, 15, 15, 14]} className="accordion-btn">
              <Box className="faq-title" style={{ fontFamily: 'Inter' }} flex="1" textAlign="left">
                Will I get full access to the course after purchasing?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: 'orange' }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton border="none" fontSize={[15, 15, 15, 14]} className="accordion-btn">
              <Box className="faq-title" style={{ fontFamily: 'Inter' }} flex="1" textAlign="left">
                Will I get full access to the course after purchasing?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: 'orange' }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20">
            <AccordionButton border="none" fontSize={[15, 15, 15, 14]} className="accordion-btn">
              <Box className="faq-title" style={{ fontFamily: 'Inter' }} flex="1" textAlign="left">
                Will I get full access to the course after purchasing?
              </Box>
              <AccordionIcon className="btn-icon" style={{ color: 'orange' }} />
            </AccordionButton>

            <AccordionPanel
              textAlign="left"
              color="#4F596A"
              className="accordion-content"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
}

export default FAQ;
