export default (req, res) => {
    switch (req.method) {
        case "GET":
            res.status(200).json({ msg: "GET listing" });
            break;
        case "POST":
            res.status(200).json({ msg: "POST listing" });
            break;
        case "PUT":
            res.status(200).json({ msg: "PUT listing" });
            break;
        case "DELETE":
            res.status(200).json({ msg: "DELETE listing " });
            break;
        default:
            res.status(500).json({ err: "error" });
    }
};
