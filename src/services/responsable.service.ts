import { runQueryAsync } from "./db.service";

export async function getResponsables() {
  return await runQueryAsync(`select * from dbo.responsables;`);
}

export async function getResponsableById(idResponsable: number){
  return await runQueryAsync(`select * from dbo.responsables where id_responsable = ${idResponsable};`);
}

export async function editResponsable(idResponsable: number, nombre?: string, cedula?: number, telefono?: string, correo?: string){

  return await runQueryAsync(
    `UPDATE dbo.responsables SET 
    nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre), 
    cedula =  COALESCE(${cedula ? cedula : null}, cedula),
	  telefono = COALESCE(${telefono ? `'${telefono}'` : null}, telefono),
	  correo = COALESCE(${correo ? `'${correo}'` : null}, correo)
    WHERE id_responsable = ${idResponsable};`
    );
}

export async function newResponsable(nombre: string, cedula: number, telefono: string, correo: string) {
  return await runQueryAsync(
    `insert into responsables (nombre, cedula, telefono, correo) values ('${nombre}', ${cedula}, '${telefono}', '${correo}');`
  );
}
