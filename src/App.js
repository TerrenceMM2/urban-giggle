import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
    },
});

function App() {
    const classes = useStyles();

    return <Container classes={{ root: classes.root }}>App</Container>;
}

export default App;
