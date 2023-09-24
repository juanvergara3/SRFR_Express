function getOffset(currentPage: number = 1, listPerPage: number): number {
    return (currentPage - 1) * listPerPage; // antes estaba como [listPerPage], pero genera un error de tipo.
}

export { getOffset };
