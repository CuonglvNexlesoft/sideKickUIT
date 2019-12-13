// import Locale from '../utils/Locale';

export const APP = {
    settings: {},
    headerText: '',
    loading: false
}

export const SETTING = {
    settings: {},
}

export const USER = {
    user: {
        userId: 14521116,
        displayName: 'Le Van Cuong',
        userName: 'a',
        passWord: '1',
        avatarUrl: '',
        address: 'Q.9, HCM',
        phoneNumber: '0976432302',
        email: '14521116@gm.uit.edu.vn',
        age: 24,
        gender: 1,// male 1 vs female 0,
        userType: 1 // 0 admin, 1 student
    },
    rehydrate: false,
    data: []
}

export const CLASS = {
    classId: '01',
    className: 'React Native',
    teacher: 'Le Thanh Trong',
    totalStudent: 0,
    activeStudent: 0,
    startDate: "01/01/2019",
    endDate: "01/01/2019",

}

export const TEST = {
    testId: '01',
    testName: 'Kiem Tra 15',
    teacher: 'Le Thanh Trong',
    totalStudent: 0,
    activeStudent: 0,
    startDate: "01/01/2019",
    endDate: "01/01/2019",
    data: [
        {
            key: "1",
            question: '1 + 2 = 2',
            options: [
                "True",
                "False",
            ],
            answer: "True"
        },
        {
            key: "2",
            question: "Which one is correct team name in NBA?",
            options: [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            answer: "Huston Rocket"
        },
        {
            key: "3",
            question: "Which one is correct team name in NBA?",
            options: [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            answer: "Huston Rocket"
        },
        {
            key: "4",
            question: "Which one is correct team name in NBA?",
            options: [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            answer: "Huston Rocket"
        },
        {
            key: "5",
            question: "Which one is correct team name in NBA?",
            options: [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            answer: "Huston Rocket"
        }
    ],
    listSubmited: []
}