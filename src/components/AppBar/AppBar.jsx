import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';


const Navbar = () => {

    return (

        <div>

            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="fixed" sx={{ bgcolor: grey[900] }}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            
                        >


                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/">
                                Inicio
                            </Link>
                        </Typography>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 2 }}>

                        </Typography>
                       

                        <Button color="inherit" >
                            < Link to="/AddRecordatorio" >
                                Nuevo Recordatorio
                            </Link>
                        </Button>

                        <Button color="inherit">
                            <a href=''>
                                Github
                            </a>
                        </Button>

                        <Button color="inherit" >
                            <Link to="/Account">
                                Perfil
                            </Link>
                        </Button>



                        <Button color="inherit" onClick={() => supabase.auth.signOut()}>
                            Salir
                            
                        </Button>










                    </Toolbar>

                </AppBar>
            </Box>



        </div>
    );
}

export default Navbar