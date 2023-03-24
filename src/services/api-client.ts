import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ffaaa953d9e9453b9da48bb0d8bf64e1"
    }
})