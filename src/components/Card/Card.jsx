import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { grey } from '@mui/material/colors';

export default function MultiActionAreaCard({ titulo, fechacreacion, contenido, fecharecordatorio }) {
  return (
    <Card sx={{ display: 'flex', height: 150, width: 650, bgcolor: grey[900]}}>

      <CardActionArea>
        <CardContent sx={{ flex: ' auto' }}>

          <Typography gutterBottom variant="body2" component="div" color="white">
           
            Titulo:
            <Typography variant="body2" color="white">
              {titulo}
            </Typography>
          </Typography>

          <Typography gutterBottom variant="body2" component="div" color="white">
            Contenido:
            <Typography variant="body2" color="white">
              {contenido}
            </Typography>
          </Typography>

          <Typography variant="body2" color="white">
            Fecha de creacion:
            <Typography variant="body2" color="white">
              {fechacreacion}
            </Typography>
          </Typography>
          <Typography variant="body2" color="white">
            Fecha de Recordatorio:
            <Typography variant="body2" color="white">
              {fecharecordatorio}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <Button variant="body2" color="white">
        Borrar
      </Button>

<Button variant="body2" color="white">
        <Link to="/Recordatorios">
          Editar
        </Link>
      </Button>
    
      


    </Card>
  );
}


