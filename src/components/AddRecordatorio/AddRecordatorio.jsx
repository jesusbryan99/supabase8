import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import AppBar from '../../components/AppBar';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { use } from "i18next";



export default function RecordatorioAdd({session}) {
 const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState(null);
    const [fechacreacion, setFechaCreacion] = useState(null);
    const [contenido, setContenido] = useState(null);
    const [fecharecordatorio, setFechaRecordatorio] = useState(null);
    

    useEffect(() => {
        getRecordatorios();
    }, [session]);

    async function getRecordatorios() {
      
            setLoading(false);
        }

    async function AgregarRecordatorio({ titulo, fechacreacion, contenido, fecharecordatorio  }) {
        setLoading(true);
        try {            
            const user = supabase.auth.user();

            const Agregar = {
                user_id: user.id,
                titulo, 
                fechacreacion, 
                contenido, 
                fecharecordatorio,
                
                updated_at: new Date(),
            };

                
            let { error } = await supabase.from("recordatorio").insert(Agregar, {
                returning: "recordatorios", 
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }
    


    return (
        
        <div>
         <AppBar/> 
         <h3>Agrega un recordatorio</h3>

         
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={session.user.email}
                    disabled
                />
            </div>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo || ""}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fechacreacion">Fecha Creacion</label>
                <input
                    id="fechacreacion"
                    type="date"
                    value={fechacreacion || ""}
                    onChange={(e) => setFechaCreacion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contenido">Contenido</label>
                <input
                    id="contenido"
                    type="text"
                    value={contenido ||""}
                    onChange={(e) => setContenido(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fecharecordatorio">Fecha Recordatorio</label>
                <input
                    id="fecharecordatorio"
                    type="date"
                    value={fecharecordatorio || ""}
                    onChange={(e) => setFechaRecordatorio(e.target.value)}
                />
            </div>
           

            <div>
                <Button
                    className="button block primary"
                    onClick={() =>
                        AgregarRecordatorio({titulo, fechacreacion, contenido, fecharecordatorio })
                    }
                    disabled={loading}
                >
                    <Link to="/">
                    {loading ? "cargando" : "Guardar"}
                    </Link>
                </Button>
            </div>                 
        </div>
    );
}
