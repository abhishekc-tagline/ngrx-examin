export interface Teacher {
}

export interface AllStudents {
    statusCode: number;
    message: string;
    data: AllStudentsData[];
    count?: number;
}

export interface AllStudentsData {
    _id: string;
    name: string;
    email: string;
    staus: string
}


export interface StudentDetails {
    statusCode: number;
    message: string;
    data: StudentDetailsData[];
}

export interface StudentDetailsData {
    _id: string;
    name: string;
    email: string;
    Result: Result[];
}

export interface Result {
    _id: string;
    studentAnswer: StudentAnswer[];
    rank: number;
    subjectName: string;
    score: number;
    studentId: string;
    resultStatus: string;
    __v?: number;
}

export interface StudentAnswer {
    question: string;
    answer: string;
}