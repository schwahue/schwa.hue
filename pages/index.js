import NextLink from 'next/link'
import { Avatar, Icon, List, ListItem, SimpleGrid, Button, Container, Box, Heading, Image, useColorModeValue, Link} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3}  
            mb={6} 
            align="center">
                Hello, I&apos;m a full-stack developer based in Singapore!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Hieu Nguyen
                    </Heading>
                <p> Student </p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base:4, md: 0}} 
                ml={{md:6}} 
                align="center">
                    <Image borderColor="whiteAlpha.800"
                    borderWidth = {2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="images/Hieu.jpg"
                    alt="Profile Image"/>
                </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Hieu is a student at {' '}
                    <Link href="https://nyp.edu.sg" target="_blank" >Nanyang Polytechnic</Link>
            </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title"> Bio</Heading>
            <BioSection>
                <BioYear>2000</BioYear>
                Born in Ho Chi Minh, Viet Nam.
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Completed the Diploma in Information & Technologies in the School of Inforamtion & and Technolgies at Nanyang Polytechnic.
            </BioSection>
        </Section>

             <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
            Reading, Exploring, Ideating & Daydreaming.
        </Paragraph>
      </Section>
        
        <Section delay={0.3}>
           <Heading as="h3" variant="section-title">
            On the web
            </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/schwahue" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                    @schwahue
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.linkedin.com/in/schwahue" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                    @schwahue
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.instagram.com/schwa.hue/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                    @schwahue
                </Button>
                </Link>
            </ListItem>           
        </List>     
        </Section>
        </Container>
        </Layout>
    )
}

export default Page
