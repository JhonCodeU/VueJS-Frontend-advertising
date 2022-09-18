import axios from "axios"

const baseUrl = "http://127.0.0.1:8000/api/v1"
const CustomerController = {
    get: {
        allCustomers: async () => {
            const { data } = await axios.get(`${baseUrl}/customers`)
            return data
        },
    }
}

export default CustomerController