import React  , {useState , useEffect} from 'react';
import './Home.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Home() {

    const [actors , setActors] = useState([])

    useEffect(()=>{
       setActors(getActors());
    } , [])
    const getActors = ()=>{
        return (
            [
                {firstName : 'Leonardo',
                lastName : 'DiCaprio',
                movies : 'Titanic , Inception , The Wolf of Wall Street',
                age : 45
               },
               {firstName : 'Rachel',
               lastName : 'McAdams',
               movies : 'Notebook , Time Travellers Wife',
               age : 41
              },
              {firstName : 'Brad',
              lastName : 'Pitt',
              movies : 'Seven Years in Tibet , World War Z ',
              age : 45
             },
            ]
        )
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
                        <TableRow key = {row?.name}>
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
