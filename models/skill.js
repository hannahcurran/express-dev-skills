const skills = [
    { id: 176534, skill: 'Technical Knowledge', achieved: false },
    { id: 198723, skill: 'Problem Solving', achieved: true },
    { id: 109459, skill: 'Curious Attitude', achieved: true }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.achieved = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}