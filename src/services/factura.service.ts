import { executeProcedureAsync, runQueryAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getFacturas(page = 1) {

  const listPerPage = generalConfig.listPerPageFacturas;
  const offset = getOffset(page, listPerPage);
  
  return await executeProcedureAsync(`dbo.GetFacturas`, [
    {name: 'offsetParameter', value: offset }, 
    {name: 'listsPerPageParameter', value: listPerPage }
  ]);
}

async function newFactura(numeroFactura: number, fechaGeneracion: string) {

  return await runQueryAsync(
    `insert into dbo.facturas (numero_factura, fecha_generacion) values (${numeroFactura}, '${fechaGeneracion}');`
  );
}

async function editFactura(idFactura: number, numeroFactura?: number, fechaGeneracion?: string){

  return await runQueryAsync(
    `UPDATE facturas SET 
    numero_factura = COALESCE(${numeroFactura ? numeroFactura : null}, numero_factura), 
    fecha_generacion =  COALESCE(${fechaGeneracion ? `'${fechaGeneracion}'` : null}, fecha_generacion) 
    WHERE id_factura = ${idFactura};`
    );
}

export { getFacturas, newFactura, editFactura };