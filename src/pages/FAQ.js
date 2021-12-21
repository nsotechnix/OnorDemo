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

function FAQ() {
  return (
    <Stack
      className="mobile-view"
    >
      <Box
        as="h1"
        className="faqTitle"
      >
        Frequently asked questions
      </Box>

      <Accordion allowToggle className="accItem" >
        <AccordionItem mb="20">
          <AccordionButton border="none" fontSize={[15, 15, 15, 14]}>
            <Box as="h2" className="faqTitle2" flex="1" textAlign="left" p={[5]}>
              Will i get full access to the course after purchasing?
            </Box>
            <AccordionIcon color="orangered" fontSize={32} />
          </AccordionButton>

          <AccordionPanel
            p={[10]}
            textAlign="left"
            color="#4F596A"
            fontSize={[20]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb="20">
          <AccordionButton border="none" fontSize={[15, 15, 15, 14]}>
            <Box as="h2" className="faqTitle2" flex="1" textAlign="left" p={[5]}>
              Do you offer support after joining?
            </Box>
            <AccordionIcon color="orangered" fontSize="32" />
          </AccordionButton>

          <AccordionPanel
            p={[10]}
            fontSize={[20]}
            textAlign="left"
            color="#4F596A"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb="20">
          <AccordionButton border="none" fontSize={[15, 15, 15, 14]}>
            <Box as="h2" className="faqTitle2" flex="1" textAlign="left" p={[5]}>
              Do you offer support after joining?
            </Box>
            <AccordionIcon color="orangered" fontSize="32" />
          </AccordionButton>

          <AccordionPanel
            p={[10]}
            fontSize={20}
            textAlign="left"
            color="#4F596A"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb="20">
          <AccordionButton border="none" fontSize={[15, 15, 15, 14]}>
            <Box as="h2" className="faqTitle2" flex="1" textAlign="left" p={[5]}>
              Do you offer support after joining?
            </Box>
            <AccordionIcon color="orangered" fontSize="32" />
          </AccordionButton>

          <AccordionPanel
            p={[10]}
            fontSize={20}
            textAlign="left"
            color="#4F596A"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb="20">
          <AccordionButton border="none" fontSize={[15, 15, 15, 14]}>
            <Box as="h2" className="faqTitle2" flex="1" textAlign="left" p={[5]}>
              Do you offer support after joining?
            </Box>
            <AccordionIcon color="orangered" fontSize="32" />
          </AccordionButton>

          <AccordionPanel
            p={[10]}
            fontSize={20}
            textAlign="left"
            color="#4F596A"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}

export default FAQ;
