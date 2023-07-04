const skills = [
{id: 176534, skill: 'Technical Knowledge', achieved: false},
{id: 198723, skill: 'Problem Solving', achieved: true},
{id: 109459, skill: 'Curious Attitude', achieved: true}
];

module.exports = {
    getAll,
    getOne 
};

function getOne(id){ 
    id = parseInt(id);
    return skills.find(skill=>skill.id === id)
}

function getAll(){
    return skills;
}