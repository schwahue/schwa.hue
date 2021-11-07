import { Container, Heading, SimpleGrid, Divider, Box} from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            <Box align="center" >
                Under construction
            </Box>
        </Container>
    )
}


export default Works