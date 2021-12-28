import React, { Component } from 'react'
import ZhesieService from '../services/ZhesieService'

class ViewHeisComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            zhesie: {}
        }
    }

    componentDidMount(){
        ZhesieService.getZhesieById(this.state.id).then( res => {
            this.setState({zhesie: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> HEI Name: </label>
                            <div> { this.state.zhesie.heiName }</div>
                        </div>
                        <div className = "row">
                            <label> Learning Programme: </label>
                            <div> { this.state.zhesie.lpName }</div>
                        </div>
                        <div className = "row">
                            <label> Validity Period: </label>
                            <div> { this.state.zhesie.validityPeriod }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewHeisComponent
