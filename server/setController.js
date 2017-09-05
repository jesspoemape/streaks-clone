module.exports={
    getHabits: (req, res) => {
        const db = req.app.get('db');
        db.habits.find({user_id: req.params.userid}, {columns: ['id', 'habit_name', 'current_streak_start_date']})
            .then(response => res.status(200).send(response)).catch(console.error, 'Error');        
    },
    getHabit: (req, res) => {
        const db = req.app.get('db');
        db.habits.find({id: req.params.habitid}, {columns: ['habit_name', 'current_streak_start_date', 'date_created']})
        .then(response => res.status(200).send(response)).catch(console.error, 'Error');
    }
}