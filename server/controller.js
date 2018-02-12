const axios = require('axios');

messages = [{id:1,
    named: "Leroy",
    text: "heyyyywassup",
time: 1200,
fav: 99
},
{id:2, 
    named: "Hank",
text: "ollo",
time: 1201,
fav: 77,
},
{id:3, 
    named: "Frank",
text: "howdy",
time: 1202,
fav: 44
},];
id = 5;
named = "Luke Skywalker";
nameId = 2;

module.exports = {
refresh: (req, res) => {
    res.status(200).send(messages);
}, 
create: (req, res) => {
        axios.get(`https://swapi.co/api/people/${nameId}/`).then(res => {
        named = res.data.name;
        nameId++;
        console.log(res.data.name)
        })
        
    const { text, time, fav} = req.body;
    messages.push({id, named, text, time, fav});
    id++;
    res.status(200).send(messages);
},
update: (req, res) => {
    let index = messages.findIndex(message => message.id == req.params.id);
    messages[index] = {
        id: messages[index].id,
        named: messages[index].named,
        text: req.body.text,
        time: req.body.time,
        fav: req.body.fav
    }
    res.status(200).send(messages)
},
delete: (req, res) => {
    const deleteID = messages.findIndex(message => message.id == req.params.id);
    messages.splice(deleteID, 1);
    res.status(200).send(messages)
},
favorite: (req, res) => {
    let index = messages.findIndex(message => message.id == req.params.id);
    messages[index] = {
        id: messages[index].id,
        named: messages[index].named,
        text: messages[index].text,
        time: messages[index].time,
        fav: ++req.body.fav
    }
    console.log(req.body)
    res.status(200).send(messages)
},
downvote: (req, res) => {
    let index = messages.findIndex(message => message.id == req.params.id);
    messages[index] = {
        id: messages[index].id,
        named: messages[index].named,
        text: messages[index].text,
        time: messages[index].time,
        fav: --req.body.fav
    }
    console.log(req.body)
    res.status(200).send(messages)
},




}