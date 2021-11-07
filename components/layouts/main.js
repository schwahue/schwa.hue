import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import RhetoricianLoader from '../rhetorician-loader.js'

const LazyRhetorician = dynamic(() => import('../rhetorician.js'), {
    ssr: false,
    loading: () => <RhetoricianLoader />
  })

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Hieu Nguyen{router.asPath}</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <LazyRhetorician />
                {children}
            </Container>
        </Box>
    )
}

export default Main