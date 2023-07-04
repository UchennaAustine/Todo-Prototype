import axios from "axios";

const URL: string = "http://localhost:6789/data"
// const MainURL: string = "http://localhost:6789/data"

export const createTask = async(data: any)=>{
    try {
        await axios.post(URL, data).then(res => {
            return res.data
        })
    } catch (error:any) {
        console.log(error.message)
    }
}