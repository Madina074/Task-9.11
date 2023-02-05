const mon = Math.floor(Math.random() * 3); 

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameWomanJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Ксения",
            "id_3": "Алевтина",
            "id_4": "Артемида",
            "id_5": "Екатерина",
            "id_6": "Ирина",
            "id_7": "Юлия",
            "id_8": "Анастасия",
            "id_9": "Милена",
            "id_10": "Наталия"
        }
    }`,
    patronymicJson: `{
        "count":10,
        "list":{
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Антон",
            "id_10": "Андрей"
        }
    }`,
    
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Программист",
            "id_2": "Врач",
            "id_3": "Следователь",
            "id_4": "Пожарный",
            "id_5": "Слесарь",
            "id_6": "Электрик",
            "id_7": "Крановщик",
            "id_8": "Автослесарь",
            "id_9": "Охранник",
            "id_10": "Курьер"
        }
    }`,
    professionWomanJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Архитектор",
            "id_3": "Писатель",
            "id_4": "Учитель начальных классов",
            "id_5": "Педагог",
            "id_6": "Доктор наук",
            "id_7": "Психолог",
            "id_8": "Продавец",
            "id_9": "Повар-кондитер",
            "id_10": "Танцовщица"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), 

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameWomanJson);
        }
    },
    
    randomSurname: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина, ') {
            let patroname = this.randomValue(this.patronymicJson);
            if (patroname == "Александр" || patroname == "Антон" || patroname == "Артем" || patroname == "Даниил" || patroname == "Иван" || patroname == "Максим") {
                return patroname + "ович";
            } else if (patroname == "Андрей") {
                return "Андреевич";
              } else if (patroname == "Дмитрий") {
                return "Дмитриевич";
            } else if (patroname =="Никита") {
                return "Никитич";
            } else {return "Михайлович"}
        } else {
            let patroname = this.randomValue(this.patronymicJson)
            if (patroname == "Александр" || patroname == "Антон" || patroname == "Артем" || patroname == "Даниил" || patroname == "Иван" || patroname == "Максим") {
                return patroname + "овна";
            } else if (patroname ==  "Андрей") {
                return  "Андреевна";
              } else if (patroname == "Дмитрий") {
                return "Дмитриевна";
              } else if (patroname =="Никита") {
                return "Никитична";
              } else {return "Михайловна"}
        }
    }, 

    randomYear: function () { 
        return this.randomIntNumber(1948, 1998) + " г.р.";
    },

    randomMonth31: function randomMonth() {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() {
		let month = `февраля`
		return month;
	},

    randomРrofession: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionWomanJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.year = this.randomYear(1948, 1998);
        this.person.profession = this.randomРrofession();
        if (mon === 0) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        } else if (mon === 2) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        }
        return this.person;
    },
};