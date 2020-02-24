function minimumDistances() {
  let a = [2, 5, 3, 7, 2, 3];
  let distances = [];

  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
      distances.push(minDistance);
    }
  }

  if (distances.length === 0) {
    return -1;
  } else {
    distances.sort((a, b) => {
      return a - b;
    });

    return distances[0];
  }
}
