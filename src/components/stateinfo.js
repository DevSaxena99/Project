import React,{useEffect,useState} from 'react';
import Popup from 'reactjs-popup';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Stateinfo() {

  const params = useParams();

  const [info,setInfo] = useState({});

  useEffect(() => {

    const statecode = params.state.toLowerCase();

    const url = "https://api.covidtracking.com/v1/states/"+statecode+"/info.json";
    const fetchData = async () => {

      try {
        const response = await fetch(url);
        const data = await response.json();
        setInfo({
          name: data.name,
          covid19Site: data.covid19Site,
          twitter: data.twitter,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <Card style={{backgroundColor: "#E1EBEE"}} sx={{ minWidth: 275 ,m: 25}}>
      <CardContent>
        <Typography variant="h5" component="div" >
          <Link className="link1" variant="contained" to="/"><i class="fa-solid fa-arrow-left-long fa-xl"></i></Link>
          <Typography sx={{ ml: 10 }} variant="h5" component="div" >
            Details:
          </Typography >
          </Typography >
          <br /><hr/>
        <Typography sx={{ ml: 10 }} variant="h5" component="div" >
          Name of State
        </Typography >
        <Typography sx={{ fontSize: 18, ml: 10 }} color="text.secondary" gutterBottom >
          {info.name}
        </Typography>
        <br />
        <Typography sx={{ ml: 10 }} variant="h5" component="div" >
          Site
        </Typography>
        <Typography sx={{ fontSize: 18, ml: 10 }} color="text.secondary" gutterBottom>
          <a href={`${info.covid19Site}`}>{info.covid19Site}</a>
        </Typography>
        <br />

        <Typography sx={{ ml: 10 }} variant="h5" component="div" >
          Twitter
        </Typography>
        <Typography sx={{ fontSize: 18, ml: 10 }} color="text.secondary" gutterBottom>
          <a href={`https://twitter.com/${info.twitter}`}>{info.twitter}</a>

        </Typography>
        <br />
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}


export default Stateinfo;
