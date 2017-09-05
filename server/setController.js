module.exports={
    getHabits: (req, res) => {
        const db = req.app.get('db');

        db.habits.find({user_id: req.params.userid}, {columns: ['id', 'habit_name', 'current_streak_start_date']})
            .then(response => res.status(200).send(response)).catch(console.error, 'Error');        
    }
}