import Head from 'next/head'
import Homelayuot from "../components/homelayout";
import Hero from "../components/Hero/hero";
import Advan from "../components/advan/advan"
import Services from "../components/Services/services";
import Form from "../components/Form/form";
import Description from "../components/Description/description";
export default function Home() {
    return (
        <>
            <Head>
                <title>PORTER</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Homelayuot>
                <Hero/>
                <Advan/>
                <Services/>
                <Form/>
                <Description/>
            </Homelayuot>

        </>
    )
}
