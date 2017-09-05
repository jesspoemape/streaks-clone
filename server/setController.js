const dummy = require('./dummyDB.js');

module.exports={
    getHabits: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.habits.find({user_id: req.params.userid}, {columns: ['id', 'habit_name', 'current_streak_start_date']})
            .then(response => res.status(200).send(response)).catch(console.error, 'Error');        
    }
}