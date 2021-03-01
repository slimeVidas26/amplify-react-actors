import React  , {useState , useEffect} from 'react';
import './Home.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { createActor} from './graphql/mutations' 
import { listActors} from './graphql/queries'



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import awsExports from "./aws-exports"; 
Amplify.configure(awsExports);

function Home() {

    const [actors , setActors] = useState([])

    useEffect(()=>{
       //setActors(getActors());
       fetchActors()
    } , [])

    
    

    //fetch actors
   const fetchActors = async ()=>{
       try {
           const actorsData = await API.graphql(graphqlOperation(listActors))
           const actors = actorsData.data.listActors.items;
           setActors(actors)
           
       } catch (error) {
        console.log('error fetching actors') 
       }
   }


    return (
        <div className = "home">
            <div className="home__table">
                <TableContainer component = {Paper}>
                    <Table aria-label = "simple table">
                        <TableHead>
                            <TableRow>
                               <TableCell>FirstName</TableCell>
                               <TableCell>LastName</TableCell>
                               <TableCell align = "right">Age</TableCell>
                               <TableCell align = "center">Movies</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {actors.map((row)=>(
                        <TableRow key = {row?.id}>
                        <TableCell component = "th" scope = "row">
                            {row?.firstName}
                        </TableCell>
                        <TableCell>{row?.lastName}</TableCell>
                        <TableCell align = "right">{row?.age}</TableCell>
                        <TableCell>{row?.movies}</TableCell>  
                        </TableRow>
                            ))}
                       
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="app__input">

            </div>
          
        </div>
    )
}

export default Home
