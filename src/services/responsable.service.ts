import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getResponsables() {
  return await runQueryAsync(`select * from dbo.responsables;`);
}

async function getResponsableById(idResponsable: number){
  return await runQueryAsync(`select * from dbo.responsables where id_responsable = ${idResponsable};`);
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

export { getResponsables, getResponsableById, editResponsable };
