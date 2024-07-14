import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));


const getAllUsers = (req, res) => {
    res.send(data.users)
}

const getUser = (req, res) => {
    try {
        let id = req.params.id
        if (id < 1) {
            return res.status(400).json({ success: false, message: "Invalid User ID" })
        }

        const user = data.users.find(item => item.id == id)
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }
        res.status(200).json({ success: true, message: "User Fetch Successfull", data: user })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const getUserByGender = (req, res) =>{
    try {
        let gender = req.query.gender;
        console.log(gender)

        if(gender != "male" && gender != "female"){
            return res.status(400).json({ success: false, message: "Invalid Gender" })
        }

        const users = data.users.filter(item => item.gender == gender)
        if (!users) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }
        res.status(200).json({success:true, message: "Data Fetch Successfull", date: users})
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
const addUser = (req,res)=>{
    try {
        let payload = req.body;

        const userIndex = data.users.findIndex(item=> item.id == req.body.id)

        if(userIndex != -1){
          return  res.status(400).json({success: false, message: "Id already exist"})
        }

        data.users.push(payload);
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));

        res.status(201).json({ success: true, message: "User Added Successfull", data: data.users })

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
const updateUser = (req, res)=>{
    try {
        let id = req.params.id;
        let payload = req.body;

        const userIndex = data.users.findIndex(item=> item.id == id)

        if(userIndex == -1){
          return  res.status(404).json({success: false, message: "User Not Found"})
        }

        data.users[userIndex] = {...data.users[userIndex], ...payload }
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));

        res.status(200).json({ success: true, message: "User Updated Successfull", data: data.users[userIndex] })


    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export { getAllUsers, getUser, getUserByGender ,addUser, updateUser}