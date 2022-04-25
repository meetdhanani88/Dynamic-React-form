import "./styles.css";
import React, { useState, useEffect } from "react";
const fields = [
    {
        label: "First Name",
        name: "firstname",
        value: "",
        type: "text",
        inputType: "text",
        isEditable: true,
        isRequired: false,
        placeholder: "Your Name"
    },
    {
        label: "Last Name",
        name: "lastname",
        value: "",
        type: "text",
        inputType: "text",
        isEditable: true,
        isRequired: true
    },
    {
        label: "Description",
        name: "description",
        className: ["col-sm-4"],
        value: "",
        type: "text",
        inputType: "textarea",
        isEditable: true,
        isRequired: true
    },

    {
        label: "Email Adrress",
        name: "email",
        value: "",
        type: "email",
        inputType: "email",
        isEditable: true,
        isRequired: true
    },
    {
        label: "Password",
        name: "password",
        value: "",
        type: "password",
        inputType: "password",
        isEditable: true,
        isRequired: true,
        placeholder: "password",
        autoComplete: "off",
        minLength: 5
    },
    {
        label: "Choose your Hobby",
        className: ["col-sm-4"],
        name: "checkbox",
        option: ["Cricket", "Reading", "Swim"],
        isRequired: [true, false, false],
        type: "checkbox",
        inputType: "checkbox"
    },
    {
        label: "Choose One Technology",
        name: "radio",
        option: ["React", "Node", "Angular"],
        value: "React",
        type: "radio",
        inputType: "radio"
    },
    {
        label: "Choose One Field",
        name: "select",
        option: ["Front-end", "Back-end", "Full-Stack"],
        type: "select",
        inputType: "select",
        isRequired: true
    },

    {
        label: "Age",
        name: "age",
        value: "",
        max: 150,
        min: 0,
        type: "number",
        inputType: "number",
        isEditable: true,
        isRequired: true,
        placeholder: "Your age"
    }
];

export default function App() {
    const [serchval, setsearchval] = useState("");
    const [searchresult, setsearchresult] = useState([]);


    function search(e) {
        setsearchval(e.target.value);

        const serchedlist = fields.filter((item, index) => {
            if (item.label.toLowerCase().includes(serchval.toLowerCase())) {
                return true;
            }
        })
        console.log(serchedlist.label);
        setsearchresult(serchedlist.label);


    }


    return (
        <>
            <h1>Hello CodeSandbox {serchval}</h1>
            <form type="submit">
                <input type="text" value={serchval} onChange={search} />
            </form>
            {/* <div>hey {searchresult}</div> */}
        </>
    );
}