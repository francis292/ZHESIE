import React, { Component } from 'react'
import ZhesieService from '../services/ZhesieService'

class ListHeisComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                heis: []
        }
        this.addZhesie = this.addZhesie.bind(this);
        this.editZhesie = this.editZhesie.bind(this);
        this.deleteZhesie = this.deleteZhesie.bind(this);
    }

    deleteZhesie(id){
        ZhesieService.deleteZhesie(id).then( res => {
            this.setState({heis: this.state.heis.filter(zhesie => zhesie.id !== id)});
        });
    }
    viewZhesie(id){
        this.props.history.push(`/view-hei/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-hei/${id}`);
    }

    componentDidMount(){
        ZhesieService.getZhesie().then((res) => {
            this.setState({ zhesie: res.data});
        });
    }

    addZhesie(){
        this.props.history.push('/add-hei/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Higher Education Institutions List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addZhesie}> Add HEI Details</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> HEI Name</th>
                                    <th> Learning Programme</th>
                                    <th> Validity Period</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.zhesie.map(
                                        zhesie => 
                                        <tr key = {zhesie.id}>
                                             <td> {zhesie.heiName} </td>   
                                             <td> {zhesie.lpName}</td>
                                             <td> {zhesie.validityPeriod}</td>
                                             <td>
                                                 <button onClick={ () => this.editZhesie(zhesie.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteZhesie(zhesie.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewZhesie(zhesie.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListHeisComponent
