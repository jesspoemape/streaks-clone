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
    },
    getCheckins: (req, res) => {
        const db = req.app.get('db');
        db.check_ins.count({habit_id: req.params.habitid}).then(total => res.status(200).send(total)).catch(console.error, 'Error');
    },
    addHabit: (req, res) => {
        const db = req.app.get('db');
        db.habits.insert(req.body).then(response => res.status(200).send('Habit successfully added')).catch(console.error, 'Error');
    },
    checkStreaks: (req, res) => {
        // get active habits based on user
        // map through habits and check if last checkin was exactly one day ago
        // if so, do nothing
        // if not, reset the current streak start date

        const db = req.app.get('db');

        db.run(`select current_streak_start_date, checkin_at, habit_id from habits join 
            (select distinct on (habit_id) * from check_ins order by habit_id, checkin_at desc) 
            check_ins on habits.id = check_ins.habit_id
            where user_id = ${2} and active = true`)
            .then(results => res.status(200).send(results) )
            .catch(console.error, 'Error');
    },
    updateStreakStartDate: (req, res) => {
        const db = req.app.get('db');
        const {today, checkInsToChange} = req.body;
        // db.run(`update habits set current_streak_start_date = ${today} where id = any(array${checkInsToChange})`)

        db.habits.update({id: checkInsToChange, current_streak_start_date: today}).then(res => res).catch(console.error, 'Error');
    }
}