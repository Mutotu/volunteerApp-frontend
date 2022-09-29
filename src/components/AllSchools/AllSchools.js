// import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Card } from 'reactstrap';


const exampleData = {
    'items': [
        {
            schoolname:'school name 1',
            class_age:'Middle School',
            address:'36 Bald Hill Circle',
            city:'Independence',
            state:'KY',
            zip_code:'41051',
            country:'United States',
            activity:'Help teachers teach students in history, biology, and mathematics. Multiple opportunities available',
        }, {
            schoolname:'school name 2',
            class_age:'Kindergarten',
            address:'812 South Southampton Dr.',
            city:'Herndon,',
            state:'VA',
            zip_code:'20170',
            country:'United States',
            activity:'Help children read books and engage with the children at playtime',
        }, {
            schoolname:'school name 3',
            class_age:'Elementary School',
            address:'7366 Garden Street',
            city:'Clemmons',
            state:'NC',
            zip_code:'27012',
            country:'United States',
            activity:'Aid elementary school teachers in educating elementary school students, from reading books to teaching mathematics',
        }, {
            schoolname:'school name 4',
            class_age:'Preschool',
            address:'8657 Greystone Road',
            city:'Fitchburg',
            state:'MA',
            zip_code:'01420',
            country:'United States',
            activity:'Assist teachers in taking care of preschoolers',
        }

    ]
}

const AllSchools = () => {
    const [schools, setSchools] = useState([]);

    const fetchSchools = async() => {
        try{
            // const schools = await fetch('url here')
            const schools = exampleData["items"]
            const data = schools
            setSchools(schools)
            console.log(schools)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchSchools();
    }, [])

    return (
            <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">     
                {schools.length ? schools.map((school, i) => {
                    return(
                        <Card classname="card">
                            <div>
                                <div key={i}>{school["schoolname"]}</div>
                                <div key={i}>{school["class_age"]}</div>
                                <div key={i}>{school["address"]}</div>
                                <div key={i}>{school["city"]}</div>
                                <div key={i}>{school["state"]}</div>
                                <div key={i}>{school["zipcode"]}</div>
                                <div key={i}>{school["country"]}</div>
                                <div key={i}>{school["activity"]}</div>
                            </div>
                        </Card>
                    )
                }): "No Schools Available"}
            </div>
    )
}


export default AllSchools;
