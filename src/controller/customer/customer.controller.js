import axios from "axios"

const baseUrl = "http://127.0.0.1:8000/api/v1"
const CustomerController = {
    get: {
        allCustomers: async () => {
            const { data } = await axios.get(`${baseUrl}/customers`)
            return data
        },
        allDepartaments: async () => {
            const { data } = await axios.get(`${baseUrl}/departaments`)
            if (data) {
                return data
            }
        },
        allCities: async () => {
            const { data } = await axios.get(`${baseUrl}/cities`)
            if (data) {
                return data
            }
        },
    },
    post: {
        newCustomer: async (customer) => {
            const { data } = await axios.post(`${baseUrl}/customers`, customer)
            if (data) {
                return data
            }
        },
    }
}

export default CustomerController