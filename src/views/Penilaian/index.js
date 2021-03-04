import React,{useState} from 'react';
import "./penilaian.styles.scss";
import{
    Row,
    Col,
    Input,
    Button,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import Select from 'react-select';
import {
    dataSiswa, 
    aspekNilai1, 
    aspekNilai2, 
    aspekNilai3, 
    aspekNilai4
} from "../../Data/data";

const Penilaian = () => {
    const [arrPayload, setArrPayload] = useState({});
    const [modal, setModal] = useState(false);

    const handleSetPayload = (obj, index) =>{
        const {name, value} = obj;
        setArrPayload(prevState=>{
            return{
                ...prevState,
                [name]:{
                    ...prevState[name], ["mahasiswa_"+index]:value
                }
            }
        })
    }
    const toogle =(e)=>{
        setModal(!modal);
    }
    const displayPayload = (datas)=>{
        return(
            <div>
                {console.log(datas)}
            </div>
        )
    }

    return (
        <div className="penilaian">
            <Row>
                <Col xs="12" sm="12">
                    <Card>
                        <Row className="header">
                            <Col xs="12" sm="12" className="col-header">
                                <h1>Applikasi Penilaian Siswa</h1>
                            </Col>
                        </Row>
                        <Row className="row-body">
                            <Col>
                                <Card>
                                    <CardBody className="card-body-list">
                                        <Row className="row-header-body-list">
                                            <Col xs="1" className="blank-space">
                                            </Col>
                                            <Col></Col>
                                            <Col>Aspek Penilaian 1</Col>
                                            <Col>Aspek Penilaian 2</Col>
                                            <Col>Aspek Penilaian 3</Col>
                                            <Col>Aspek Penilaian 4</Col>
                                        </Row>
                                        {
                                            dataSiswa.map((datas, index)=>(
                                                <Row className="row-body-list" id={`${index}`}>
                                                    <Col className="image-student" xs="1">
                                                        <i className="fa fa-user"></i>
                                                    </Col>
                                                    <Col>
                                                        {datas.label}
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            className="form-control"
                                                            options={aspekNilai1}
                                                            onChange={(name, value)=>handleSetPayload(name, index+1)}
                                                            >
                                                        </Select>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            className="form-control"
                                                            options={aspekNilai2}
                                                            onChange={(name, value)=>handleSetPayload(name, index+1)}
                                                            >
                                                        </Select>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            className="form-control"
                                                            options={aspekNilai3}
                                                            onChange={(name, value)=>handleSetPayload(name, index+1)}

                                                            >
                                                        </Select>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            className="form-control"
                                                            options={aspekNilai4}
                                                            onChange={(name, value)=>handleSetPayload(name, index+1)}
                                                            >
                                                        </Select>
                                                    </Col>
                                                </Row>                          
                                            ))
                                        }
                                        <Row className="row-button">
                                            <Col xs="12">
                                                <Button 
                                                    type="button" 
                                                    className="form-control btn btn-primary pull-right"
                                                    onClick={(e)=>toogle(e)}
                                                > Save 
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Modal isOpen={modal} toggle={toogle} className="modal-lg">
                                <ModalHeader toggle={toogle}>
                                    <h4> This is Your Data</h4>
                                </ModalHeader>
                                <ModalBody>
                                    <Input className="text-area" type="textarea" value={JSON.stringify(arrPayload)}></Input>
                                </ModalBody>
                            </Modal>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Penilaian;