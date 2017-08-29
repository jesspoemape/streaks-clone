const dummy = require('./dummyDB.js');

module.exports={
    getHabits: (req, res) => {
        const dbInstance = req.app.get('db');
        let usersHabits = dummy.habits.filter(habit => {
            if (req.params.userid === habit.user_id) {
                return habit;
            }
        });
        res.status(200).send(usersHabits).catch(console.error, "Error");
        
    }
}