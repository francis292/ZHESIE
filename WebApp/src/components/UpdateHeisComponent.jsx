import React, { Component } from 'react'
import ZhesieService from '../services/ZhesieService';

class UpdateHeisComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            heiName: '',
            lpName: '',
            validityPeriod: ''
        }
        this.changeHeiNameHandler = this.changeHeiNameHandler.bind(this);
        this.changeLpNameHandler = this.changeLpNameHandler.bind(this);
        this.updateZhesie = this.updateZhesie.bind(this);
    }

    componentDidMount(){
        ZhesieService.getZhesieById(this.state.id).then( (res) =>{
            let zhesie = res.data;
            this.setState({heiName: zhesie.heiName,
                lpName: zhesie.lpName,
                validityPeriod : zhesie.validityPeriod
            });
        });
    }

    updateZhesie = (e) => {
        e.preventDefault();
        let zhesie = {heiName: this.state.heiName, lpName: this.state.lpName, validityPeriod: this.state.validityPeriod};
        console.log('zhesie => ' + JSON.stringify(zhesie));
        console.log('id => ' + JSON.stringify(this.state.id));
        ZhesieService.updateZhesie(zhesie, this.state.id).then( res => {
            this.props.history.push('/heis');
        });
    }
    
    changeHeiNameHandler= (event) => {
        this.setState({heiName: event.target.value});
    }

    changeLpNameHandler= (event) => {
        this.setState({lpName: event.target.value});
    }

    changeValidityPeriodHandler= (event) => {
        this.setState({validityPeriod: event.target.value});
    }

    cancel(){
        this.props.history.push('/heis');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update HEI Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Higher Education Institution: </label>
                                            <input placeholder="Higher Education Institution" name="heiName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Learning Programme Name: </label>
                                            <input placeholder="Learning Programme Name" name="lpName" className="form-control" 
                                                value={this.state.lpName} onChange={this.changeLpNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Validity Period: </label>
                                            <input placeholder="Validity Period" name="validityPeriod" className="form-control" 
                                                value={this.state.validityPeriod} onChange={this.changeValidityperiodHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateZhesie}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateHeisComponent
