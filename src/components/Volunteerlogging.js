import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Link } from "react-router-dom";
import {useState} from 'react'
import volunteerSlice from '../store/volunteerSlice'
import {Button, Card, CardBody, CardTitle, Textarea, FormGroup, Label, Input, ListGroup} from 'reactstrap'
import Form from 'react-bootstrap/Form'

import {useNavigate} from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css'

function VolunteerLogging () {
    const user = useSelector((
        state => state.users
    ))

    const dispatch = useDispatch()
    const initialState = {
        schoolName: '',
        classAge: '',
        activity: '',
        date: null,
        startTime: null,
        endTime: null,
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = async (evt) => {
        const {
            name,
            value,
        } = evt.target
        setFormData(formData => ({
           ...formData,
           [name]: value
        }))
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await dispatch(volunteerSlice(({ ...formData})))

        } catch (error) {
        }
    }

    return(
        <section className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <Card className="card">
          <CardBody>
            <CardTitle>
          <h4 className="font-weight-bold text-center">Log Volunteer Hours</h4>
        </CardTitle>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
        <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="schoolName"> School Name </Label>
            <Input
              id="schoolName"
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
          </div>
         <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="classAge"> Class Age </Label>
            <Input
              id="classAge"
              type="text"
              name="classAge"
              value={formData.classAge}
              onChange={handleChange}
              required
            />
        </div>
        <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="activity"> Activity </Label>
            <Input
              id="activity"
              type="textarea"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              required
            />
        </div>
        <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="date"> Date </Label>
            <Input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
        </div>
         <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="startTime"> Start Time </Label>
            <Input
              id="startTime"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
        </div>
         <div className="form-group font-weight-bold font-italic text-info">
          <Label htmlFor="endTime">  End Time </Label>
            <Input
              id="endTime"
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
        </div>
                    <br></br>
         <Button className="btn btn-outline-info float-left" type="submit" onSubmit={handleSubmit}>
         <h4>Save Activity</h4>
         </Button>
        <br></br>
        <Link className="btn btn-outline-info float-right" to='/' type="Go Back">
         <h4>Go Back</h4>
           </Link>
       </FormGroup>
       </Form>
     </CardBody>
    </Card>
    <br></br>
  </section>
    );

  //       } catch (error) {

  //       }

  //   }

    // return(
    //     <Card style={{width: '18rem'}}>
    //         <CardBody>
    //             <form className="volunteer-logging-form">
    //                 <CardTitle tag="h4">Log Volunteer Hours</CardTitle>
    //                 <ListGroup>
    //                     <label htmlFor="schoolName">
    //                         School Name
    //                     </label>
    //                     <input name="schoolName" onChange={handleChange} value={formData.schoolName} required></input>

    //                     <label htmlFor="classAge">
    //                         Class Age
    //                     </label>
    //                     <input name="classAge" onChange={handleChange} value={formData.classAge} required></input>

    //                     <label htmlFor="activity">
    //                         Activity
    //                     </label>
    //                     <textarea name="activity" onChange={handleChange} value={formData.activity} required></textarea>

    //                     <label htmlFor="date" >
    //                         Date
    //                     </label>
    //                     <input name="date" onChange={handleChange} value={formData.date} type = "date" required></input>

    //                     <label htmlFor="startTime">
    //                         Start Time
    //                     </label>
    //                     <input name="startTime" onChange={handleChange} value={formData.startTime} type="time" required></input>

    //                     <label htmlFor="endTime">
    //                         End Time
    //                     </label>
    //                     <input name="endTime" onChange={handleChange} value={formData.endTime} type="time" required></input>
    //                 </ListGroup>
    //                 <div>
    //                     <Button color = "primary" className="save-button" type="submit" onSubmit={handleSubmit}>
    //                         Save Activity
    //                     </Button>
    //                 </div>
    //             </form>
    //         </CardBody>
    //     </Card>
    // )

}

export default VolunteerLogging
