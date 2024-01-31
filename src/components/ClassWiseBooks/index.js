import "./index.css"
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import Books from "../Books"
import DedBooks from "../DedBooks"

const books = {
    Old: [
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        },
        {
            standard: "",
            textBooks: [],
            workBooks: []
        }
    ],
    New: [
        {
            standard: "First",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../first_new/images/First_class_telugu_new_text_book.jpg",
                    pdfLink: "../../first_new/1st_telugu_new_text_book.pdf",
                    downloadLink: "1st_telugu_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../first_new/images/First_class_english_new_text_book.jpeg",
                    pdfLink: "../../first_new/1st_english_new_text_book.pdf",
                    downloadLink: "1st_english_new_text_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../first_new/images/First_class_maths_sem2_new_text_book.jpeg",
                    pdfLink: "../../first_new/1st_maths_sem1_text_book.pdf",
                    downloadLink: "1st_maths_sem1_text_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../first_new/images/First_class_maths_sem1_new_text_book.jpeg",
                    pdfLink: "../../first_new/1st_maths_sem2_text_book.pdf",
                    downloadLink: "1st_maths_sem2_text_book.pdf"
                }
            ],
            workBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../first_new/images/First_class_telugu_work_book.jpeg",
                    pdfLink: "../../first_new/1st_telugu_work_book.pdf",
                    downloadLink: "1st_telugu_work_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../first_new/images/First_class_english_work_book.jpeg",
                    pdfLink: "../../first_new/1st_english_work_book.pdf",
                    downloadLink: "1st_english_work_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../first_new/images/First_class_maths_sem1_work_book .jpeg",
                    pdfLink: "../../first_new/1st_maths_sem1_work_book.pdf",
                    downloadLink: "1st_maths_sem1_work_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../first_new/images/First_class_maths_sem2_work_book.jpeg",
                    pdfLink: "../../first_new/1st_maths_sem2_work_book.pdf",
                    downloadLink: "1st_maths_sem2_work_book.pdf"
                },
            ]
        },
        {
            standard: "Second",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../second_new/images/2_telugu_new_text_book.jpg",
                    pdfLink: "../../second_new/2_telugu_new_text_book.pdf",
                    downloadLink: "2_telugu_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../second_new/images/2_english_new_text_book.jpg",
                    pdfLink: "../../second_new/2_english_new_text_book.pdf",
                    downloadLink: "2_english_new_text_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../second_new/images/2_maths_sem1_text_book.jpg",
                    pdfLink: "../../second_new/2_maths_sem1_text_book.pdf",
                    downloadLink: "2_maths_sem1_text_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../second_new/images/2_maths_sem2_text_book.jpg",
                    pdfLink: "../../second_new/2_maths_sem2_text_book.pdf",
                    downloadLink: "2_maths_sem2_text_book.pdf"
                }
            ],
            workBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../second_new/images/2_telugu_work_book.jpg",
                    pdfLink: "../../second_new/2_telugu_work_book.pdf",
                    downloadLink: "2_telugu_work_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../second_new/images/2_english_work_book.jpg",
                    pdfLink: "../../second_new/2_english_work_book.pdf",
                    downloadLink: "2_english_work_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../second_new/images/2_maths_sem1_work_book.jpg",
                    pdfLink: "../../second_new/2_maths_sem1_work_book.pdf",
                    downloadLink: "2_maths_sem1_work_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../second_new/images/2_maths_sem2_work_book.jpg",
                    pdfLink: "../../second_new/2_maths_sem2_work_book.pdf",
                    downloadLink: "2_maths_sem2_work_book.pdf"
                },
            ]        
        },
        {
            standard: "Third",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../third_new/images/3_telugu_new_text_book.jpg",
                    pdfLink: "../../third_new/3_telugu_new_text_book.pdf",
                    downloadLink: "3_telugu_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../third_new/images/3_english_new_text_book.jpg",
                    pdfLink: "../../third_new/3_english_new_text_book.pdf",
                    downloadLink: "3_english_new_text_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../third_new/images/3_maths_sem1_text_book.jpg",
                    pdfLink: "../../third_new/3_maths_sem1_text_book.pdf",
                    downloadLink: "3_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../third_new/images/3_maths_sem2_text_book.jpg",
                    pdfLink: "../../third_new/3_maths_sem2_text_book.pdf",
                    downloadLink: "3_maths_sem2_text_book"
                },
                {
                    subject: "evs1",
                    imageLink: "../../third_new/images/3_evs_sem1_text_book.jpg",
                    pdfLink: "../../third_new/3_evs_sem1_text_book.pdf",
                    downloadLink: "3_evs_sem1_text_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../third_new/images/3_evs_sem2_text_book.jpg",
                    pdfLink: "../../third_new/3_evs_sem2_text_book.pdf",
                    downloadLink: "3_evs_sem2_text_book.pdf"
                },
            ],
            workBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../third_new/images/3_telugu_work_book.jpg",
                    pdfLink: "../../third_new/3_telugu_work_book.pdf",
                    downloadLink: "3_telugu_work_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../third_new/images/3_english_work_book.jpg",
                    pdfLink: "../../third_new/3_english_work_book.pdf",
                    downloadLink: "3_english_work_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../third_new/images/3_maths_sem1_work_book.jpg",
                    pdfLink: "../../third_new/3_maths_sem1_work_book.pdf",
                    downloadLink: "3_maths_sem1_work_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../third_new/images/3_maths_sem2_work_book.jpg",
                    pdfLink: "../../third_new/3_maths_sem2_work_book.pdf",
                    downloadLink: "3_maths_sem2_work_book.pdf"
                },
                {
                    subject: "evs1",
                    imageLink: "../../third_new/images/3_evs_sem1_work_book.jpg",
                    pdfLink: "../../third_new/3_evs_sem1_work_book.pdf",
                    downloadLink: "3_evs_sem1_work_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../third_new/images/3_evs_sem2_work_book.jpg",
                    pdfLink: "../../third_new/3_evs_sem2_work_book.pdf",
                    downloadLink: "3_evs_sem2_work_book.pdf"
                },
            ]
        },
        {
            standard: "Fourth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../fourth_new/images/4_telugu_new_text_book.jpg",
                    pdfLink: "../../fourth_new/4_telugu_new_text_book.pdf",
                    downloadLink: "4_telugu_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../fourth_new/images/4_english_new_text_book.jpg",
                    pdfLink: "../../fourth_new/4_english_new_text_book.pdf",
                    downloadLink: "4_english_new_text_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../fourth_new/images/4_maths_sem1_text_book.jpg",
                    pdfLink: "../../fourth_new/4_maths_sem1_text_book.pdf",
                    downloadLink: "4_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../fourth_new/images/4_maths_sem2_text_book.jpg",
                    pdfLink: "../../fourth_new/4_maths_sem2_text_book.pdf",
                    downloadLink: "4_maths_sem2_text_book"
                },
                {
                    subject: "evs1",
                    imageLink: "../../fourth_new/images/4_evs_sem1_text_book.jpg",
                    pdfLink: "../../fourth_new/4_evs_sem1_text_book.pdf",
                    downloadLink: "4_evs_sem1_text_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../fourth_new/images/4_evs_sem2_text_book.jpg",
                    pdfLink: "../../fourth_new/4_evs_sem2_text_book.pdf",
                    downloadLink: "4_evs_sem2_text_book.pdf"
                },
            ],
            workBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../fourth_new/images/4_telugu_work_book.jpg",
                    pdfLink: "../../fourth_new/4_telugu_work_book.pdf",
                    downloadLink: "4_telugu_work_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../fourth_new/images/4_english_work_book.jpg",
                    pdfLink: "../../fourth_new/4_english_work_book.pdf",
                    downloadLink: "4_english_work_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../fourth_new/images/4_maths_sem1_work_book.jpg",
                    pdfLink: "../../third_new/4_maths_sem1_work_book.pdf",
                    downloadLink: "4_maths_sem1_work_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../fourth_new/images/4_maths_sem2_work_book.jpg",
                    pdfLink: "../../third_new/4_maths_sem2_work_book.pdf",
                    downloadLink: "4_maths_sem2_work_book.pdf"
                },
                {
                    subject: "evs1",
                    imageLink: "../../fourth_new/images/4_evs_sem1_work_book.jpg",
                    pdfLink: "../../fourth_new/4_evs_sem1_work_book.pdf",
                    downloadLink: "4_evs_sem1_work_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../fourth_new/images/4_evs_sem2_work_book.jpg",
                    pdfLink: "../../fourth_new/4_evs_sem2_work_book.pdf",
                    downloadLink: "4_evs_sem2_work_book.pdf"
                },
            ]
        },
        {
            standard: "Fifth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../fifth_new/images/5_telugu_new_text_book.jpg",
                    pdfLink: "../../fifth_new/5_telugu_new_text_book.pdf",
                    downloadLink: "5_telugu_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../fifth_new/images/5_english_new_text_book.jpg",
                    pdfLink: "../../fifth_new/5_english_new_text_book.pdf",
                    downloadLink: "5_english_new_text_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../fifth_new/images/5_maths_sem1_text_book.jpg",
                    pdfLink: "../../fifth_new/5_maths_sem1_text_book.pdf",
                    downloadLink: "5_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../fifth_new/images/5_maths_sem2_text_book.jpg",
                    pdfLink: "../../fifth_new/5_maths_sem2_text_book.pdf",
                    downloadLink: "5_maths_sem2_text_book"
                },
                {
                    subject: "evs1",
                    imageLink: "../../fifth_new/images/5_evs_sem1_text_book.jpg",
                    pdfLink: "../../fifth_new/5_evs_sem1_text_book.pdf",
                    downloadLink: "5_evs_sem1_text_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../fifth_new/images/5_evs_sem2_text_book.jpg",
                    pdfLink: "../../fifth_new/5_evs_sem2_text_book.pdf",
                    downloadLink: "5_evs_sem2_text_book.pdf"
                },
            ],
            workBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../fifth_new/images/5_telugu_work_book.jpg",
                    pdfLink: "../../fifth_new/5_telugu_work_book.pdf",
                    downloadLink: "5_telugu_work_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../fifth_new/images/5_english_work_book.jpg",
                    pdfLink: "../../fifth_new/5_english_work_book.pdf",
                    downloadLink: "5_english_work_book.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../fifth_new/images/5_maths_sem1_work_book.jpg",
                    pdfLink: "../../third_new/5_maths_sem1_work_book.pdf",
                    downloadLink: "5_maths_sem1_work_book.pdf"
                },
                {
                    subject: "maths2",
                    imageLink: "../../fifth_new/images/5_maths_sem2_work_book.jpg",
                    pdfLink: "../../third_new/5_maths_sem2_work_book.pdf",
                    downloadLink: "5_maths_sem2_work_book.pdf"
                },
                {
                    subject: "evs1",
                    imageLink: "../../fifth_new/images/5_evs_sem1_work_book.jpg",
                    pdfLink: "../../fifth_new/5_evs_sem1_work_book.pdf",
                    downloadLink: "5_evs_sem1_work_book.pdf"
                },
                {
                    subject: "evs2",
                    imageLink: "../../fifth_new/images/5_evs_sem2_work_book.jpg",
                    pdfLink: "../../fifth_new/5_evs_sem2_work_book.pdf",
                    downloadLink: "5_evs_sem2_work_book.pdf"
                },
            ]
        },
        {
            standard: "Sixth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../sixth_new/images/6_telugu_new_text_book.jpg",
                    pdfLink: "../../sixth_new/6_telugu_new_text_book.pdf",
                    downloadLink: "6_telugu_new_text_book.pdf"
                },
                {
                    subject: "hindi",
                    imageLink: "../../sixth_new/images/6_hindi_new_text_book.jpg",
                    pdfLink: "../../sixth_new/6_hindi_new_text_book.pdf",
                    downloadLink: "6_hindi_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../sixth_new/images/6_english_new_text_book.jpg",
                    pdfLink: "../../sixth_new/6_english_new_text_book.pdf",
                    downloadLink: "6_english_new_text_book.pdf"
                },
                {
                    subject: "english-reader",
                    imageLink: "../../sixth_new/images/6_english_reader.jpg",
                    pdfLink: "../../sixth_new/6_english_reader.pdf",
                    downloadLink: "6_english_reader.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../sixth_new/images/6_maths_sem1_text_book.jpg",
                    pdfLink: "../../sixth_new/6_maths_sem1_text_book.pdf",
                    downloadLink: "6_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../sixth_new/images/6_maths_sem2_text_book.jpg",
                    pdfLink: "../../sixth_new/6_maths_sem2_text_book.pdf",
                    downloadLink: "6_maths_sem2_text_book"
                },
                {
                    subject: "evs",
                    imageLink: "../../sixth_new/images/6_evs_text_book.jpg",
                    pdfLink: "../../sixth_new/6_evs_text_book.pdf",
                    downloadLink: "6_evs_text_book.pdf"
                },
                {
                    subject: "science1",
                    imageLink: "../../sixth_new/images/66_science_sem1_text_book.jpg",
                    pdfLink: "../../sixth_new/6_science_sem1_text_book.pdf",
                    downloadLink: "6_science_sem1_text_book.pdf"
                },
                {
                    subject: "science2",
                    imageLink: "../../sixth_new/images/6_science_sem2_text_book.jpg",
                    pdfLink: "../../sixth_new/6_science_sem2_text_book.pdf",
                    downloadLink: "6_science_sem2_text_book.pdf"
                },
                {
                    subject: "social1",
                    imageLink: "../../sixth_new/images/6_social_sem1_text_book.jpg",
                    pdfLink: "../../sixth_new/6_social_sem1_text_book.pdf",
                    downloadLink: "6_social_sem1_text_book.pdf"
                },
                {
                    subject: "social2",
                    imageLink: "../../sixth_new/images/6_social_sem2_text_book.jpg",
                    pdfLink: "../../sixth_new/6_social_sem2_text_book.pdf",
                    downloadLink: "6_social_sem2_text_book.pdf"
                },
            ],
            workBooks: []
        },
        {
            standard: "Seventh",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../seventh_new/images/7_telugu_new_text_book.jpg",
                    pdfLink: "../../seventh_new/7_telugu_new_text_book.pdf",
                    downloadLink: "7_telugu_new_text_book.pdf"
                },
                {
                    subject: "hindi",
                    imageLink: "../../seventh_new/images/7_hindi_new_text_book.jpg",
                    pdfLink: "../../seventh_new/7_hindi_new_text_book.pdf",
                    downloadLink: "7_hindi_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../seventh_new/images/7_english_new_text_book.jpg",
                    pdfLink: "../../seventh_new/7_english_new_text_book.pdf",
                    downloadLink: "7_english_new_text_book.pdf"
                },
                {
                    subject: "english-reader",
                    imageLink: "../../seventh_new/images/7_english_reader.jpg",
                    pdfLink: "../../seventh_new/7_english_reader.pdf",
                    downloadLink: "7_english_reader.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../seventh_new/images/7_maths_sem1_text_book.jpg",
                    pdfLink: "../../seventh_new/7_maths_sem1_text_book.pdf",
                    downloadLink: "7_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../seventh_new/images/7_maths_sem12_text_book.jpg",
                    pdfLink: "../../seventh_new/7_maths_sem2_text_book.pdf",
                    downloadLink: "7_maths_sem2_text_book"
                },
                {
                    subject: "evs",
                    imageLink: "../../seventh_new/images/7_evs_text_book.jpg",
                    pdfLink: "../../seventh_new/7_evs_text_book.pdf",
                    downloadLink: "7_evs_text_book.pdf"
                },
                {
                    subject: "science1",
                    imageLink: "../../seventh_new/images/7_science_sem1_text_book.jpg",
                    pdfLink: "../../seventh_new/7_science_sem1_text_book.pdf",
                    downloadLink: "7_science_sem1_text_book.pdf"
                },
                {
                    subject: "science2",
                    imageLink: "../../seventh_new/images/7_science_sem2_text_book.jpg",
                    pdfLink: "../../seventh_new/7_science_sem2_text_book.pdf",
                    downloadLink: "7_science_sem2_text_book.pdf"
                },
                {
                    subject: "social1",
                    imageLink: "../../seventh_new/images/7_social_sem1_text_book.jpg",
                    pdfLink: "../../seventh_new/7_social_sem1_text_book.pdf",
                    downloadLink: "7_social_sem1_text_book.pdf"
                },
                {
                    subject: "social2",
                    imageLink: "../../seventh_new/images/7_social_sem2_text_book.jpg",
                    pdfLink: "../../seventh_new/7_social_sem2_text_book.pdf",
                    downloadLink: "7_social_sem2_text_book.pdf"
                },
            ],
            workBooks: []
        },
        {
            standard: "Eighth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../eighth_new/images/8_telugu_new_text_book.jpg",
                    pdfLink: "../../eighth_new/8_telugu_new_text_book.pdf",
                    downloadLink: "8_telugu_new_text_book.pdf"
                },
                {
                    subject: "hindi",
                    imageLink: "../../eighth_new/images/8_hindi_new_text_book.jpg",
                    pdfLink: "../../eighth_new/8_hindi_new_text_book.pdf",
                    downloadLink: "8_hindi_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../eighth_new/images/8_english_new_text_book.jpg",
                    pdfLink: "../../eighth_new/8_english_new_text_book.pdf",
                    downloadLink: "8_english_new_text_book.pdf"
                },
                {
                    subject: "english-reader",
                    imageLink: "../../eighth_new/images/8_english_reader.jpg",
                    pdfLink: "../../eighth_new/8_english_reader.pdf",
                    downloadLink: "8_english_reader.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../eighth_new/images/8_maths_sem1_text_book.jpg",
                    pdfLink: "../../eighth_new/8_maths_sem1_text_book.pdf",
                    downloadLink: "8_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../eighth_new/images/8_maths_sem2_text_book.jpg",
                    pdfLink: "../../eighth_new/8_maths_sem2_text_book.pdf",
                    downloadLink: "8_maths_sem2_text_book"
                },
                {
                    subject: "evs",
                    imageLink: "../../eighth_new/images/8_evs_text_book.jpg",
                    pdfLink: "../../eighth_new/8_evs_text_book.pdf",
                    downloadLink: "8_evs_text_book.pdf"
                },
                {
                    subject: "biology1",
                    imageLink: "../../eighth_new/images/8_biology_sem1_text_book.jpg",
                    pdfLink: "../../eighth_new/8_biology_sem1_text_book.pdf",
                    downloadLink: "8_biology_sem1_text_book.pdf"
                },
                {
                    subject: "biology2",
                    imageLink: "../../eighth_new/images/8_biology_sem2_text_book.jpg",
                    pdfLink: "../../eighth_new/8_biology_sem2_text_book.pdf",
                    downloadLink: "8_biology_sem2_text_book.pdf"
                },
                {
                    subject: "physics1",
                    imageLink: "../../eighth_new/images/8_physics_sem1_text_book.jpg",
                    pdfLink: "../../eighth_new/8_physics_sem1_text_book.pdf",
                    downloadLink: "8_physics_sem1_text_book.pdf"
                },
                {
                    subject: "physics2",
                    imageLink: "../../eighth_new/images/8_physics_sem2_text_book.jpg",
                    pdfLink: "../../eighth_new/8_physics_sem2_text_book.pdf",
                    downloadLink: "8_physics_sem2_text_book.pdf"
                },
                {
                    subject: "geography",
                    imageLink: "../../eighth_new/images/8_social_geography_text_book.jpg",
                    pdfLink: "../../eighth_new/8_social_geography_text_book.pdf",
                    downloadLink: "8_social_geography_text_book.pdf"
                },
                {
                    subject: "history",
                    imageLink: "../../eighth_new/images/8_social_history_text_book.jpg",
                    pdfLink: "../../eighth_new/8_social_history_text_book.pdf",
                    downloadLink: "8_social_history_text_book.pdf"
                },
                {
                    subject: "politics",
                    imageLink: "../../eighth_new/images/8_social_politics_text_book.jpg",
                    pdfLink: "../../eighth_new/8_social_politics_text_book.pdf",
                    downloadLink: "8_social_politics_text_book.pdf"
                },
            ],
            workBooks: []
        },
        {
            standard: "Ninth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../ninth_new/images/9_telugu_new_text_book.jpg",
                    pdfLink: "../../ninth_new/9_telugu_new_text_book.pdf",
                    downloadLink: "9_telugu_new_text_book.pdf"
                },
                {
                    subject: "upavaachakam",
                    imageLink: "../../ninth_new/images/9_telugu_upavachakam_text_book.jpg",
                    pdfLink: "../../ninth_new/9_telugu_upavachakam_text_book.pdf",
                    downloadLink: "9_telugu_upavachakam_text_book.pdf"
                },
                {
                    subject: "hindi",
                    imageLink: "../../ninth_new/images/9_hindi_new_text_book.jpg",
                    pdfLink: "../../ninth_new/9_hindi_new_text_book.pdf",
                    downloadLink: "9_hindi_new_text_book.pdf"
                },
                {
                    subject: "hindi-upavaachakam",
                    imageLink: "../../ninth_new/images/9_hindi_upavachakam_text_book.jpg",
                    pdfLink: "../../ninth_new/9_hindi_upavachakam_text_book.pdf",
                    downloadLink: "9_hindi_upavachakam_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../ninth_new/images/9_english_new_text_book.jpg",
                    pdfLink: "../../ninth_new/9_english_new_text_book.pdf",
                    downloadLink: "9_english_new_text_book.pdf"
                },
                {
                    subject: "english-reader",
                    imageLink: "../../ninth_new/images/9_english_reader.jpg",
                    pdfLink: "../../ninth_new/9_english_reader.pdf",
                    downloadLink: "9_english_reader.pdf"
                },
                {
                    subject: "maths1",
                    imageLink: "../../ninth_new/images/9_maths_sem1_text_book.jpg",
                    pdfLink: "../../ninth_new/9_maths_sem1_text_book.pdf",
                    downloadLink: "9_maths_sem1_text_book"
                },
                {
                    subject: "maths2",
                    imageLink: "../../ninth_new/images/9_maths_sem2_text_book.jpg",
                    pdfLink: "../../ninth_new/9_maths_sem2_text_book.pdf",
                    downloadLink: "9_maths_sem2_text_book"
                },
                {
                    subject: "evs",
                    imageLink: "../../ninth_new/images/9_evs_text_book.jpg",
                    pdfLink: "../../ninth_new/9_evs_text_book.pdf",
                    downloadLink: "9_evs_text_book.pdf"
                },
                {
                    subject: "biology",
                    imageLink: "../../ninth_new/images/9_biology_text_book.jpg",
                    pdfLink: "../../ninth_new/9_biology_text_book.pdf",
                    downloadLink: "9_biology_text_book.pdf"
                },
                {
                    subject: "physics1",
                    imageLink: "../../ninth_new/images/9_physics_sem1_text_book.jpg",
                    pdfLink: "../../ninth_new/9_physics_sem1_text_book.pdf",
                    downloadLink: "9_physics_sem1_text_book.pdf"
                },
                {
                    subject: "physics2",
                    imageLink: "../../ninth_new/images/9_physics_sem2_text_book.jpg",
                    pdfLink: "../../ninth_new/9_physics_sem2_text_book.pdf",
                    downloadLink: "9_physics_sem2_text_book.pdf"
                },
                {
                    subject: "geography",
                    imageLink: "../../ninth_new/images/9_social_geography_text_book.jpg",
                    pdfLink: "../../ninth_new/9_social_geography_text_book.pdf",
                    downloadLink: "9_social_geography_text_book.pdf"
                },
                {
                    subject: "history",
                    imageLink: "../../ninth_new/images/9_social_history_text_book.jpg",
                    pdfLink: "../../ninth_new/9_social_history_text_book.pdf",
                    downloadLink: "9_social_history_text_book.pdf"
                },
                {
                    subject: "politics",
                    imageLink: "../../ninth_new/images/9_social_politics_text_book.jpg",
                    pdfLink: "../../ninth_new/9_social_politics_text_book.pdf",
                    downloadLink: "9_social_politics_text_book.pdf"
                },
                {
                    subject: "economics",
                    imageLink: "../../ninth_new/images/9_social_economics_text_book.jpg",
                    pdfLink: "../../ninth_new/9_social_economics_text_book.pdf",
                    downloadLink: "9_social_economics_text_book.pdf"
                },
            ],
            workBooks: [
                {
                    subject: "english",
                    imageLink: "../../ninth_new/images/9_english_work_book.jpg",
                    pdfLink: "../../ninth_new/9_english_work_book.pdf",
                    downloadLink: "9_english_work_book.pdf"
                }
            ]
        },
        {
            standard: "Tenth",
            textBooks: [
                {
                    subject: "telugu",
                    imageLink: "../../tenth_new/images/10_telugu_new_text_book.jpg",
                    pdfLink: "../../tenth_new/10_telugu_new_text_book.pdf",
                    downloadLink: "10_telugu_new_text_book.pdf"
                },
                {
                    subject: "hindi",
                    imageLink: "../../tenth_new/images/10_hindi_new_text_book.jpg",
                    pdfLink: "../../tenth_new/10_hindi_new_text_book.pdf",
                    downloadLink: "10_hindi_new_text_book.pdf"
                },
                {
                    subject: "english",
                    imageLink: "../../tenth_new/images/10_english_new_text_book.jpg",
                    pdfLink: "../../tenth_new/10_english_new_text_book.pdf",
                    downloadLink: "10_english_new_text_book.pdf"
                },
                {
                    subject: "maths-em",
                    imageLink: "../../tenth_new/images/10_maths_em_text_book.jpg",
                    pdfLink: "../../tenth_new/10_maths_em_text_book.pdf",
                    downloadLink: "10_maths_em_text_book.pdf"
                },
                {
                    subject: "maths-tm",
                    imageLink: "../../tenth_new/images/10_maths_tm_text_book.jpg",
                    pdfLink: "../../tenth_new/10_maths_tm_text_book.pdf",
                    downloadLink: "10_maths_tm_text_book.pdf"
                },
                {
                    subject: "evs-em",
                    imageLink: "../../tenth_new/images/10_evs_em_text_book.jpg",
                    pdfLink: "../../tenth_new/10_evs_em_text_book.pdf",
                    downloadLink: "10_evs_em_text_book.pdf"
                },
                {
                    subject: "evs-tm",
                    imageLink: "../../tenth_new/images/10_evs_tm_text_book.jpg",
                    pdfLink: "../../tenth_new/10_evs_tm_text_book.pdf",
                    downloadLink: "10_evs_tm_text_book.pdf"
                },
                {
                    subject: "biology-em",
                    imageLink: "../../tenth_new/images/10_biology_em_text_book.jpg",
                    pdfLink: "../../tenth_new/10_biology_em_text_book.pdf",
                    downloadLink: "10_biology_em_text_book.pdf"
                },
                {
                    subject: "biology-tm",
                    imageLink: "../../tenth_new/images/10_biology_tm_text_book.jpg",
                    pdfLink: "../../tenth_new/10_biology_tm_text_book.pdf",
                    downloadLink: "10_biology_tm_text_book.pdf"
                },
                {
                    subject: "physics-em",
                    imageLink: "../../tenth_new/images/10_physics_em_text_book.jpg",
                    pdfLink: "../../tenth_new/10_physics_em_text_book.pdf",
                    downloadLink: "10_physics_em_text_book.pdf"
                },
                {
                    subject: "physics-tm",
                    imageLink: "../../tenth_new/images/10_physics_tm_text_book.jpg",
                    pdfLink: "../../tenth_new/10_physics_tm_text_book.pdf",
                    downloadLink: "10_physics_tm_text_book.pdf"
                },
                {
                    subject: "social-em",
                    imageLink: "../../tenth_new/images/10_social_em_text_book.jpg",
                    pdfLink: "../../tenth_new/10_social_em_text_book.pdf",
                    downloadLink: "10_social_em_text_book.pdf"
                },
                {
                    subject: "social-tm",
                    imageLink: "../../tenth_new/images/10_social_tm_text_book.jpg",
                    pdfLink: "../../tenth_new/10_social_tm_text_book.pdf",
                    downloadLink: "10_social_tm_text_book.pdf"
                },
            ],
            workBooks: []
        },
    ],
    Ded: {
        firstYearBooks: [
            {
                id: 1,
                subject: "బాల్యదశ బాలల వికాసం మరియు అభ్యసనం / Childhood, Child Development and Learning",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-1.pdf",
                downloadLink: "D.El.Ed-1st year-paper-1.pdf"
            },
            {
                id: 2,
                subject: "సమాజము – విద్య మరియు విద్యా ప్రణాళిక / Society, Education and Curriculum",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-2.pdf",
                downloadLink: "D.El.Ed-1st year-paper-2.pdf"
            },
            {
                id: 3,
                subject: "పూర్వ ప్రాథమిక విద్య / Early Childhood Care and Education (ECCE)",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-3.pdf",
                downloadLink: "D.El.Ed-1st year-paper-3.pdf"
            },
            {
                id: 4,
                subject: "ప్రాథమిక స్థాయిలో భాషాభివృద్ధి మరియు అవగాహన / Pedagogy of mother tongue Telugu at primary level",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-4.pdf",
                downloadLink: "D.El.Ed-1st year-paper-4.pdf"
            },
            {
                id: 5,
                subject: "ప్రాథమిక స్థాయిలో గణిత అవగాహన మరియు గణిత విద్య / Pedagogy of Mathematics at primary level",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-5.pdf",
                downloadLink: "D.El.Ed-1st year-paper-5.pdf"
            },
            {
                id: 6,
                subject: "విద్యా ప్రణాలికలో అధ్యాపన శాస్త్రం – సమాచార  ప్రసార సాంకేతిక సమైక్యత / Pedagogy across curriculum and ICT integration",
                pdfLink: "../../ded_first_year_books/D.El.Ed-1st year-paper-6.pdf",
                downloadLink: "D.El.Ed-1st year-paper-6.pdf"
            }
        ],
        secondYearBooks: [
            {
                subject: "వర్ధమాన భారతదేశంలో విద్య / Education in Contemporary India",
                id: 1,
                pdfLink: "../../ded_second_year_books/paper_1.pdf",
                downloadLink: "paper_1.pdf"
            },
            {
                subject: "జెండర్ సమైఖ్యత – విలీన దృక్పథాలు / Integrating Gender and Inclusive Perspectives in Education",
                id: 2,
                pdfLink: "../../ded_second_year_books/paper_2.pdf",
                downloadLink: "paper_2.pdf"
            },
            {
                subject: "పాఠశాల సంస్కృతి – నాయకత్వం ఉపాధ్యాయ అభివృద్ది / School Culture, Leadership and Teacher Development",
                id: 3,
                pdfLink: "../../ded_second_year_books/paper_3.pdf",
                downloadLink: "paper_3.pdf"
            },
            {
                subject: "Pedagogy of English at Primary Level",
                id: 4,
                pdfLink: "../../ded_second_year_books/paper_4.pdf",
                downloadLink: "paper_4.pdf"
            },
            {
                subject: "పరిసరాల విజ్ఞానం లో అధ్యాపన శాస్త్రం / Pedagogy of EVS at Primary Level (Classes I to V)",
                id: 5,
                pdfLink: "../../ded_second_year_books/paper_5.pdf",
                downloadLink: "paper_5.pdf"
            },
            {
                subject: "Pedagogy of Elementary Level Subject (classes VI-VIII) - Optional English Language",
                id: "6A",
                pdfLink: "../../ded_second_year_books/paper_6a.pdf",
                downloadLink: "paper_6a.pdf"
            },
            {
                subject: "Pedagogy of Elementary Level Subject (classes VI-VIII) – Optional Telugu Language",
                id: "6B",
                pdfLink: "../../ded_second_year_books/paper_6b.pdf",
                downloadLink: "paper_6b.pdf"
            },
            {
                subject: "Pedagogy of Elementary Level Subject (classes VI-VIII) – Optional Maths",
                id: "6C",
                pdfLink: "../../ded_second_year_books/paper_6c.pdf",
                downloadLink: "paper_6c.pdf"
            },
            {
                subject: "Pedagogy of Elementary Level Subject (classes VI-VIII) – Optional Science",
                id: "6D",
                pdfLink: "../../ded_second_year_books/paper_6d.pdf",
                downloadLink: "paper_6d.pdf"
            },
            {
                subject: "Pedagogy of Elementary Level Subject (classes VI-VIII) – Optional Science Social Studies",
                id: "6E",
                pdfLink: "../../ded_second_year_books/paper_6e.pdf",
                downloadLink: "paper_6e.pdf"
            },
        ]
    },
    Bed: []
}


const HeadFoot = (props) => {
    const {routePath} = props
    return (
        <div className="flex">
            <Link to={routePath} className="return">Back</Link>
            <Link to="/" className="return">Home</Link>
        </div>
    )
}

const HR = () => {
    return (
        <hr className="hr" />
    )
}

const OldAndNewTextBooks1To10 = (props) => {
    const {type, id} = props
    const getPath = () => {
        if (type === "New"){
            return "/newBooks"
        }else if(type === "Old") {
            return "/oldBooks"
        }else if(type === "Ded") {
            return "/"
        }else{
            return "/"
        }
    }
    const routePath = getPath()
    const index = parseInt(id) - 1
    const standard = books[type][index].standard
    const text_books_list = books[type][index].textBooks
    const work_books_list = books[type][index].workBooks
    return (
        <div className="first_new">
            <HeadFoot routePath={routePath} />
            <HR />
            <h1 className="head">{standard} Class {type} Text Books</h1>
            <ul className="ul_list">
                <Books content="text" books_list={text_books_list} />
            </ul>
            <HR />
            <h1 className="head">{standard} Class Work Books</h1>
            <ul className="ul_list">
                {work_books_list.length === 0 ? <p className="no-result">😔 No Results 😔</p> : <Books content="work" books_list={work_books_list} />}
            </ul>
            <HR />
            <p className="p"></p>
            <HeadFoot />
        </div>
    )
}

const Ded = () => {
    const dedFirstYearBooks = books["Ded"]["firstYearBooks"]
    const dedSecondYearBooks = books["Ded"]["secondYearBooks"]
    return (
        <DedBooks firstYearBooks={dedFirstYearBooks} secondYearBooks={dedSecondYearBooks} />
    )
}

const ClassWiseBooks = (props) => {
    const {type} = props
    const params = useParams()
    const {id} = params
    console.log(type)
    if(type === "Ded") {
        return <Ded />
    }else if(type === "Bed") {
        return <div>Ramesh</div>
    }else{
        return <OldAndNewTextBooks1To10 type={type} id={id} />
    }
}

export default ClassWiseBooks