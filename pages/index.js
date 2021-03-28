import Head from "next/head";
import { Container } from "@material-ui/core";
import dbConnect from "../utils/db";
import Business from "../models/Business";

const style = {
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default function Home() {
    return <Container style={style.container}>App</Container>;
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
    await dbConnect();

    /* find all the data in our database */
    const result = await Business.find({});

    return { props: { businesses: result } };
}
