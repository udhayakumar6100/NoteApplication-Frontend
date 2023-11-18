import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"3xl"}>
        MY NOTE APPLICATION
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Welcome to My Note Application! Capture your thoughts, ideas, and to-dos
        effortlessly with our intuitive note-taking platform. Stay organized,
        access your notes from anywhere, and never miss a brilliant idea again.
        <br />
        <br />
        <strong>Key Features:</strong>
        <br />
        <ul>
          <li>Create, edit, and delete notes with ease.</li>
          <li>Categorize your notes for better organization.</li>
          <li>
            User-friendly interface for a seamless note-taking experience.
          </li>
        </ul>
        <br />
        Sign in or create an account to get started, and let the note-taking
        journey begin! Happy Note-Taking! My Note Application
      </Text>
    </Box>
  );
}
