import { runQueryAsync, executeProcedureAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getResponsables(page = 1) {
  
  return await runQueryAsync(`select * from dbo.responsables;`);
}

async function editResponsable(idResponsable: number, nombre?: string, cedula?: number, telefono?: string, correo?: string){

  return await runQueryAsync(
    `UPDATE dbo.responsables SET 
    nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre), 
    cedula =  COALESCE(${cedula ? cedula : null}, cedula),
	  telefono = COALESCE(${telefono ? `'${telefono}'` : null}, telefono),
	  correo = COALESCE(${correo ? `'${correo}'` : null}, correo)
    WHERE id_responsable = ${idResponsable};`
    );
}

export { getResponsables, editResponsable };