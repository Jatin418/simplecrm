import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { adddata, deldata } from './ContextProvider';
import { updatedata } from './ContextProvider'

// This is for material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody'; 
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link as RLink} from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from '@mui/material';



const Account = () => {
  
    const [getuserdata, setUserdata] = useState([]);
    console.log("Get User Data",getuserdata);
    
    const getLengthData = getuserdata.length;
    console.log("Get  length  Data",getLengthData);

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {

        const res = await fetch("http://localhost:8800/getdatas", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("Datataa",res);
        const data = await res.json();
        console.log("Datat",data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data",data);
            console.log("GetData",data.length);

        }
       
    }

    
    
    useEffect(() => {
      getdata();
    }, []) 
    
    console.log("getuserdata",getuserdata);

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:8800/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }

  return (

    <>

{
                udata ?
                    <>
                        <Box class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </Box>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <Box class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </Box>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <Box class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </Box>
                    </> : ""
            }   


    
<RLink to="/Accreg" ><Box m={2} display="flex" justifyContent="flex-end" alignItems="flex-end">
<Button variant="contained">Add Data</Button></Box>  
</RLink> 

 
    <TableContainer component={Paper} style={{backgroundColor:"white"}}>
      <Table sx={{ minWidth: 650, tableLayout: "auto"  }} aria-label="simple table" >
        <TableHead>
          <TableRow style={{fontWeight:"800"}}  sx={{
        backgroundColor: "#AAA492",
        borderBottom: "2px solid #706464",
        "& th": {
          fontSize: "1rem",
          color: "white"
        }
      }}>
            <TableCell>id&nbsp;</TableCell>
            <TableCell >Acccount Name&nbsp;</TableCell>
            <TableCell >Full address</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Phone</TableCell>
            <TableCell >Web Site</TableCell>
            <TableCell>Source &nbsp;</TableCell>
            <TableCell>Initials &nbsp;</TableCell>
            <TableCell> &nbsp;</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody >
          {getuserdata.map((element,id,index) => (
            <TableRow  
         key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {id+1}
              </TableCell>
              <TableCell component="th" scope="row">
                {element.acname}
              </TableCell>
              <TableCell >{element.addline}</TableCell>
              <TableCell >{element.type}</TableCell>
              <TableCell >{element.phone}</TableCell>
              <TableCell >{element.websit}</TableCell>
              <TableCell >{element.source}</TableCell>
              <TableCell >{element.owner}</TableCell>
              <Box p={1}>
              <RLink to={`view/${element._id}`}><button className="btn btn-success" ><RemoveRedEyeIcon/></button></RLink>&nbsp;
               <RLink to={`edit/${element._id}`}><button className="btn btn-primary" ><CreateIcon/></button></RLink>&nbsp;
                <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                  </Box>

            </TableRow>
            
           
          
          ))}
          
        </TableBody>
     
      </Table>
    </TableContainer>
    
    </>
  );
}
export default Account;















// This is simple form data


// const Home = () => {
  
//     const [getuserdata, setUserdata] = useState([]);
//     console.log("Get User Data",getuserdata);
    
//     const getLengthData = getuserdata.length;
//     console.log("Get  length  Data",getLengthData);

//     const { udata, setUdata } = useContext(adddata);

//     const {updata, setUPdata} = useContext(updatedata);

//     const {dltdata, setDLTdata} = useContext(deldata);

//     const getdata = async () => {

//         const res = await fetch("https://crudappreactjs.herokuapp.com/getdata", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setUserdata(data)
//             console.log("get data",data);
//             console.log("GetData",data.length);

//         }
       
//     }

//     useEffect(() => {
//         getdata();
//     }, [])


//     const deleteuser = async (id) => {

//         const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const deletedata = await res2.json();
//         console.log(deletedata);

//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         } else {
//             console.log("user deleted");
//             setDLTdata(deletedata)
//             getdata();
//         }

//     }
   

//     return (

//         <>
//             {
//                 udata ?
//                     <>
//                         <div class="alert alert-success alert-dismissible fade show" role="alert">
//                             <strong>{udata.name}</strong>  added succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             }
//             {
//                 updata ?
//                     <>
//                         <div class="alert alert-success alert-dismissible fade show" role="alert">
//                             <strong>{updata.name}</strong>  updated succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             }

//             {
//                 dltdata ?
//                     <>
//                         <div class="alert alert-danger alert-dismissible fade show" role="alert">
//                             <strong>{dltdata.name}</strong>  deleted succesfully!
//                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>
//                     </> : ""
//             } 


//             <div className="mt-5">
//                 <div className="container">
//                     <div className="add_btn mt-2 mb-2">
//                         {/* Here i just change OR REMOVE the position of colon */}
//                         <NavLink to={`register`} className="btn btn-primary">Add data</NavLink>
//                     </div>

//                     <table class="table">
//                         <thead>
//                             <tr className="table-dark">
// <th scope="col">id</th>
// <th scope="col">Username</th>
// <th scope="col">email</th>
// <th scope="col">Job</th>
// <th scope="col">Number</th>
// <th scope="col"></th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {
// getuserdata.map((element, id, index) => {
//     console.log("Index Number",index);
//     console.log("Length Of table",getuserdata.length);
//     return (
//         <>
//             <tr>
//                 <th scope="row">{id + 1}</th>
//                 <td>{element.name}</td>
//                 <td>{element.email}</td>
//                 <td>{element.work}</td>
//                 <td>{element.mobile}</td>
//                 <td className="d-flex justify-content-between">
//                     <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
//                                                     <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
//                                                     <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
//                                                 </td>
//                                             </tr>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>


//                 </div> 
//             </div>
//         </>
//     )
// }

// export default Home;
