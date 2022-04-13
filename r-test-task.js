const getPossibleRoutes = (ls, k) => {
  if (k > ls.length) {
    return [];
  }

  if (k === ls.lengh) {
    return [ls];
  }

  if (k === 1) {
    return ls.map((distance) => [distance]);
  }

  const possibleRoutes = [];

  for (let i = 0; i < ls.length - k + 1; i++) {
    const head = ls.slice(i, i + 1);
    const tail = getPossibleRoutes(ls.slice(i + 1), k - 1);

    for (let j = 0; j < tail.length; j++) {
      possibleRoutes.push([...head, ...tail[j]]);
    }
  }

  return possibleRoutes;
};

const countMiles = (route) => {
  return route.reduce((totalMiles, miles) => totalMiles + miles, 0);
};

const chooseOptimalDistance = (t, k, ls) => {
  const possibleRoutes = getPossibleRoutes(ls, k);
  const totalMiles = possibleRoutes.map(countMiles);

  let optimalDistance = 0;

  for (const miles of totalMiles) {
    if (miles > optimalDistance && miles <= t) {
      optimalDistance = miles;
    }
  }

  return optimalDistance || null;
};
