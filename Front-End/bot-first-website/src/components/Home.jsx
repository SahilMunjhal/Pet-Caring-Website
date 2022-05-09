import { Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./Home.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { get_petdata,getdata } from "./Redux/CreateEntityRedux/action";


export const Home = () => {
  const [searched, setSearched] = useState("");
  const [cost, setCost] = useState('');
  const [verified,setVerified]=useState('');
  const dispatch=useDispatch();

  const costhandleChange = (event) => {
    
    axios.get(`http://localhost:2345/entity?cost=${event.target.value}`).then(({data})=>{
      dispatch(get_petdata(data));
    });
  };

  const verifiedhandleChange=(event)=>{
     axios.get(`http://localhost:2345/entity?verified=${event.target.value}`).then(({data})=>{

      dispatch(get_petdata(data));
    });
  };

  let debouncer;
  const searchHandle=(event)=>{
     
    if(debouncer){
      clearTimeout(debouncer);
    }
    debouncer=setTimeout(()=>{
      axios.get(`http://localhost:2345/entity?city=${event.target.value}`)
      .then(({data})=>{
        dispatch(get_petdata(data));
      });
    },1400);
  } 

  useEffect(() => {
    datafn();
  }, []);

  const datafn = () => {
      dispatch(getdata());
  };

  const {petdata}=useSelector((store)=>store.pet);

  let count = 0;

  return (
    <div>
      <div style={{
        justifyContent:"space-between",
      }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Box ml={16} mt={2}>
            <TextField onChange={searchHandle} sx={{ height: "50px" }} placeholder="Search ..." />
          </Box>
          <FormControl sx={{ m:3, minWidth: 270 }} size="small">
            <InputLabel >Sort By Cost</InputLabel>
            <Select
        
              onChange={costhandleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"dsc"}>High To Low</MenuItem>
              <MenuItem value={"asc"}>Low To High</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m:3, minWidth: 270 }} size="small">
            <InputLabel >Sort by verified</InputLabel>
            <Select
              value={verified}
              onChange={verifiedhandleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"yes"}>Verified</MenuItem>
              <MenuItem value={"no"}>Not Verified</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Cost Per Day</th>
            <th>Verified</th>
            <th>Rating</th>
            <th>Know More</th>
          </tr>
        </thead>
        <tbody>
          {petdata.map((element) => {
            return (
              <tr>
                <td>{count++}</td>
                <td>{element.name}</td>
                <td>{element.city}</td>
                <td>{element.address}</td>
                <td>{element.capacity}</td>
                <td>{element.cost}</td>
                <td>{element.verified}</td>
                <td>{element.rating}</td>
                <td>
                  <Link to={`/listing/${element._id}`}>Know more</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
