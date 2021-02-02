const ages = [ 12,14,16,23,17];
const ages2 = [15,16,12];
const ages3 =[ 12,44,22,22];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
// console.log(allAges2);

const business =388;
const sochib =5768;
const minister = 487;
const takapoisa =[388,5768,487];
// const maximum = Math.max(business,sochib,minister);
const maximum = Math.max(...takapoisa);
console.log(maximum);