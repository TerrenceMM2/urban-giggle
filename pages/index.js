import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

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
