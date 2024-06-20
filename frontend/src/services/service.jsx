import axios from "axios";

class Service {
    constructor() {
        this.baseUrl = 'http://localhost:8080';
    }

    addStudent(student) {
        return axios.post(`${this.baseUrl}/student/register`, student);
    }

    checkStudent(studentCheck) {
        return axios.post(`${this.baseUrl}/student/login`, studentCheck);
    }


    addTeacher(teacher) {
        return axios.post(`${this.baseUrl}/teacher/register`, teacher);
    }

    checkTeacher(teacherCheck) {
        return axios.post(`${this.baseUrl}/teacher/login`, teacherCheck);
    }
}

export default Service;
