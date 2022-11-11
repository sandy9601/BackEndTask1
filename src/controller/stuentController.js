const studentModel = require("../model/studentModel")


const createStudent=async function(req,res){
    const data=req.body
    var findStudent=studentModel.findOne({"name":data.name})
    if(findStudent){
        console.log("datafound")
        for(let subject=0;subject<findStudent.marks.length;subject++){
            if(findStudent.marks[subject]["subject"]==data.marks[subject]["subject"]){
                
            }
        }
    }

    const studentData=studentModel.create(data)
    return res.status(201).send({
        status:true,
        messgae:"student created",
        data:studentData
    
    })
}

module.exports={createStudent}