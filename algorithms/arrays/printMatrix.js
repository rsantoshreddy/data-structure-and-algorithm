const printMatrix = (rows, columns) => {
  let _rows = rows;
  while (_rows >= 0) {
    let _columns = columns;
    let row = '';
    while (_columns > 0) {
      row = `${row} ${_rows * columns + _columns}`;
      _columns--;
    }
    console.log(row);
    _rows--;
  }
};
