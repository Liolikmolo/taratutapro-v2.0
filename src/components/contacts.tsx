"use client";

import React, {useEffect, useState} from 'react';

type ContactsDataType = {
    keypoint: string[],
    managerProfile:{
        image: string,
        name: string,
        position: string
    }
}

const Contacts = (props: {contactsDataValue: string}) => {
    const {contactsDataValue} = props;
    const [submitted, setSubmitted] = useState(false);
    const [loader, setLoader] = useState(false);
    const [contactData, setContactData] = useState<ContactsDataType>();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/page-data");
                if(!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setContactData(data?.contactData);
            } catch (e) {
                console.error("Error fetching services:", e);
            }
        }
        fetchData();
    }, [])

    const resetForm = () => {
        formData.email = "";
        formData.name = "";
        formData.message = "";
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);

        fetch("https://formsubmit.co/ajax/strojka19@gmail.com", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: formData.email,
                name: formData.name,
                message: formData.message,
            }),
        })
        .then(res => res.json())
        .then(data => {
            setSubmitted(data.success)
            setLoader(false);
            resetForm();
        })
        .catch(err => console.log(err.message));
    };

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
            
        </div>
    );
};

export default Contacts;