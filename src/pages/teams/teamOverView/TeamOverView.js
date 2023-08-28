import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import TaskListTable from "../../../components/taskListTable/TaskListTable";
import CreateTask from "../../../components/createTask/CreateTask";
import TeamMember from "../../../components/createTask/teamMembers/TeamMember";


export default function TeamOverView() {
    const [taskModalShow, setTaskModalShow] = React.useState(false);
    const [taskData, setTaskData]= useState([])

    const taskInfo = (data) => {
        setTaskData(data);
    }
    return (
        <>
            <div>
                <Container>
                    <TeamMember />
                </Container>
            </div>
            <div className='mt-3'>
                <Container>
                    <Row>
                        {/* <Col sm={2} className="d-flex justify-content-center text-center mt-2">
                            
                        </Col> */}
                        <h3>2. <strong>Tasks</strong></h3>
                        <hr />

                        <Col sm={4}>
                            <Button variant="outline-primary" className="mb-2" onClick={()=>setTaskModalShow(true)}>Add Task</Button>
                            {/* <div> */}
                            <CreateTask taskData={taskInfo} showModal={taskModalShow} />
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>
                            
                            <TaskListTable taskListData={taskData} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}