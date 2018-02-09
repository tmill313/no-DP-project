messages = [{id:1, 
    text: "heyyyywassup",
time: 1200,
fav: 99
},
{id:2, 
text: "ollo",
time: 1201,
fav: 77,
},
{id:3, 
text: "howdy",
time: 1202,
fav: 44
},];
id = 5;

module.exports = {
refresh: (req, res) => {
    res.status(200).send(messages);
}, 
create: (req, res) => {
    const { text, time, fav} = req.body;
    messages.push({id, text, time, fav});
    id++;
    res.status(200).send(messages);
},
update: (req, res) => {
    let index = messages.findIndex(message => message.id == req.params.id);
    messages[index] = {
        id: messages[index].id,
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
}
}