messages = [];
id = 0;

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
    let index = message.findIndex(message => message.id == req.params.id);
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
    messages.splice(indexId, 1);
    res.status(200).send(messages)
}
}