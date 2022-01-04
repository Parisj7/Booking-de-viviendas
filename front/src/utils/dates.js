export function getDaysBetweenTwoDates(start, end) {
  const arr = [];
  for (
    let dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(dt.toLocaleDateString());
  }
  return arr;
}

export function getFechasOcupadasFromReservas(reservas) {
  const fechasOcupadas = [];
  for (let i = 0; i < reservas.length; i++) {
    fechasOcupadas.push(
      getDaysBetweenTwoDates(reservas[i].fechaInicio, reservas[i].fechaFin)
    );
  }
  return fechasOcupadas.flat();
}

export function isDateInArray(target, dateArray = []) {
  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i] === target) return true;
  }
  return false;
}

export function isDateRangeOccupied(start, end, occupied = []) {
  return occupied.some((dt) => start < dt && end > dt);
}

// the string format is yyyy-MM-dd, which our backend returns in JSON
export function getDateFromString(formatString) {
  const parts = formatString.split("-");
  const dateObject = new Date(+parts[0], parts[1] - 1, +parts[2]);
  return dateObject;
}
