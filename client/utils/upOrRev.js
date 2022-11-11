//pick card direction
const upOrRev = () => {
    const zeroOrOne = Math.random();

    if (zeroOrOne < 0.5) {
      return 'upright';
    } else {
      return 'reversed';
    }
};

export default upOrRev;