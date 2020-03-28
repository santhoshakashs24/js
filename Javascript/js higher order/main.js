var companies = [
    {name:"Akash Infotech", category:"software"},
    {name:"Akash Design", category:"Graphic"},
    {name:"Akash Arts", category:"Skill"},
    {name:"Akash Trust", category:"Social"},
]

const ages = [1, 2, 4, 3, 4, 5, 6 ];

//forEach
companies.forEach((e,i) => {
    console.log(e);
})

//filter
const canD = ages.filter(age => age>=4);
console.log(canD);

const comp = companies.filter(com => com.category === 'Skill');
console.log(comp);


//map
const names = companies.map((company) => company.name);
console.log(names);

//sort

const sortc = ages.sort();
console.log(sortc);

//reduce

const agesum = ages.reduce((total, age) => total+age, 0);
console.log(agesum)

//combined

const combined = ages
    .map(age => age*2)
    .filter(age => age>=2)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b,0);

console.log(combined);