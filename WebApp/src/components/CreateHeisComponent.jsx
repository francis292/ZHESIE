import React, { Component } from 'react'
import ZhesieService from '../services/ZhesieService';

class CreateHeisComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            heiName: '',
            lpName: '',
            validityPeriod: ''
        }
        this.changeHeiNameHandler = this.changeHeiNameHandler.bind(this);
        this.changeLpNameHandler = this.changeLpNameHandler.bind(this);
        this.saveOrUpdateHei = this.saveOrUpdateHei.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ZhesieService.getZhesieById(this.state.id).then( (res) =>{
                let zhesie = res.data;
                this.setState({heiName: zhesie.heiName,
                    lpName: zhesie.lpName,
                    validityPeriod : zhesie.validityPeriod
                });
            });
        }        
    }
    saveOrUpdateHei = (e) => {
        e.preventDefault();
        let zhesie = {heiName: this.state.heiName, lpName: this.state.lpName, validityPeriod: this.state.validityPeriod};
        console.log('zhesie => ' + JSON.stringify(zhesie));

        // step 5
        if(this.state.id === '_add'){
            ZhesieService.createZhesie(zhesie).then(res =>{
                this.props.history.push('/heis');
            });
        }else{
            ZhesieService.updateZhesie(zhesie, this.state.id).then( res => {
                this.props.history.push('/heis');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add HEI</h3>
        }else{
            return <h3 className="text-center">Update HEI</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> HEI Name: </label>
                                            <input placeholder="HEI Name" name="heiName" className="form-control" 
                                                value={this.state.heiName} onChange={this.changeHeiNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Learning Programme: </label>
                                            <input placeholder="Learning Programme" name="lpName" className="form-control" 
                                                value={this.state.lpName} onChange={this.changeLpNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Validity Period: </label>
                                            <input placeholder="Validity Period" name="validityPeriod" className="form-control" 
                                                value={this.state.validityPeriod} onChange={this.changeValidityPeriodHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateHei}>Save</button>
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

export default CreateHeisComponent
