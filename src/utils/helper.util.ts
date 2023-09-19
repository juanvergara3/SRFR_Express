function getOffset(currentPage: number = 1, listPerPage: number) {
    return (currentPage - 1) * listPerPage; // antes estaba como [listPerPage], pero genera un error de tipo.
}
  
function emptyOrRows(rows: any) {
  if (!rows) {
    return [];
  }
  return rows;
}

export { getOffset, emptyOrRows };
