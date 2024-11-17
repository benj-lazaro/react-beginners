import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "68ec877d22c347cbb21f5c2dfc2e7363"
    }
});
