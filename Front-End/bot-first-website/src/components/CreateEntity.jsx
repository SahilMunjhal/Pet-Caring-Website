import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Select from "@mui/material/Select";
import axios from "axios";

export const CreateEntity = () => {
  const [entity,setEntity]=useState({
    name:"",
    city:"",
    address:"",
    capacity:"",
    cost:"",
    verified:"",
    rating:"",
    watched:"",
    type:"",
    size:"",
    emergency:"",
    outdoor:"",
    supervision:"",
    summary:"",
    img:"",
  })

  const handleChange = (event) => {
      console.log(event.target);
    const{name,value}=event.target;
    console.log(name,value);
    setEntity({...entity,[name]:value});
  };
  
  console.log(entity);

  const submitform=(event)=>{
    console.log("123",entity);
    event.preventDefault();
    axios.post("http://localhost:2345/entity",entity).then((res)=>{
        alert("You are Sucessfully added the Pet-House")
    }).catch((error)=>{
         alert("Something went Wrong");
    });
  }

  return (
    <div>
      <form>
        <div
          style={{
            display: "flex",
            margin: "20px 50px",
            justifyContent: "space-between",
          }}
        >
        <Box
            sx={{
              width: 370,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Name" name="name" onChange={handleChange}  variant="filled"/>
          </Box>

          <Box
            sx={{
              width: 370,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="city" name="city" onChange={handleChange}  variant="filled"/>
          </Box>
         
          <Box
            sx={{
              width: 370,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Adress" name="address" onChange={handleChange}  variant="filled"/>
          </Box>
          
        </div>

        <div
          style={{
            display: "flex",
            margin: "30px 50px",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="capacity">Capacity</InputLabel>
            <Select
              labelId="capacity"
              name="capacity"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">Cost per day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="cost"
              name="cost"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={5000}>Five Thousand</MenuItem>
              <MenuItem value={10000}>Ten Thousand</MenuItem>
              <MenuItem value={12000}>Twelve Thousand</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">Verified</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="verified"
              name="verified"
              defaultValue={""}
              label="Verified"
              onChange={handleChange}
            >
              <MenuItem value={"yes"}>Yes</MenuItem>
              <MenuItem value={"no"}>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="rating"a
              name="rating"
              defaultValue={""}
              label="rating"
              onChange={handleChange}
            >
              <MenuItem value={"Four"}>Four Star</MenuItem>
              <MenuItem value={"Five"}>Five Star</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            margin: "30px 50px",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">
              Watched Frequency
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="watched"
              name="watched"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">
              Accepted Pet Types
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="type"
              name="type"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"dogs"}>Dogs</MenuItem>
              <MenuItem value={"cats"}>Cats</MenuItem>
              <MenuItem value={"rabbits"}>Rabbits</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="size"
              name="size"
              defaultValue={""}
              label="Verified"
              onChange={handleChange}
            >
              <MenuItem value={"1-5"}>1-5 KG</MenuItem>
              <MenuItem value={"5-10"}>5-10 KG</MenuItem>
              <MenuItem value={"10-15"}>10-15 KG</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel id="demo-simple-select-label">Emargency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="emergency"
              name="emergency"
              defaultValue={""}
              label="rating"
              onChange={handleChange}
            >
              <MenuItem value={"yes"}>Yes</MenuItem>
              <MenuItem value={"no"}>No</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            margin: "30px 50px",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 690 }}>
            <InputLabel id="demo-simple-select-label">Outdoor Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="outdoor"
              name="outdoor"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"small"}>Small</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"larger"}>Larger</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div
          style={{
            display: "flex",
            margin: "30px 50px",
            justifyContent: "space-between",
          }}
        >
           <FormControl sx={{ m: 1, minWidth: 690 }}>
            <InputLabel id="demo-simple-select-label">Supervision</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="supervision"
              name="supervision"
              defaultValue={""}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"All time Adult supervision"}>
                All time Adult supervision
              </MenuItem>
              <MenuItem value={"Supervision provided by experts"}>
                Supervision provided by experts
              </MenuItem>
              <MenuItem value={"Fully Securable Super-vision"}>
                Fully Securable Super-vision
              </MenuItem>
            </Select>
          </FormControl>

        </div>

        <div
          style={{
            display: "flex",
            margin: "0px 50px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Summary" id="summary" name="summary" onChange={handleChange}  variant="filled"/>
          </Box>
          <Box
            sx={{
              width: 430,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="img" id="img" name="img" onChange={handleChange}  variant="filled"/>
          </Box>
        </div>
        <input type="submit" id="submitform" onClick={submitform}/>
      </form>
    </div>
  );
};
