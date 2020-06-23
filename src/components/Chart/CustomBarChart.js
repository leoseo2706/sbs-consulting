import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class CustomBarChart extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            // feel free to customize 
            colors: ["#8884d8", "#4d79ff", "#82ca9d"],
            data: [],
            dataKeys: [],
            key: null,
        }
    }

    setAttributes = (data) => {
        if (this.state.dataKeys.length === 0
            && Array.isArray(data) && data.length > 0) {
            const tmpKeys = Object.keys(data[0]);
            const key = tmpKeys[0];
            const dataKeys = tmpKeys.filter((item, index) => index > 0);
            this.setState({
                dataKeys: dataKeys,
                data: data,
                key: key
            });
        }
    }

    render() {
        let notReady = true;
        if (notReady) {
            this.setAttributes(this.props.data);
            notReady = isEmpty(this.state.data)
                || isEmpty(this.state.dataKeys) || this.state.key == null;
        }

        if (notReady) {
            return <span style={{ textAlign: "center", border: "solid 1px red" }}>
                Loading ....</span>;
        }

        return (
            <BarChart style={{ marginTop: "30px" }}
                width={590}
                height={300}
                data={this.state.data}
                margin={{
                    top: 50, right: 50, left: 50, bottom: 0,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {this.state.dataKeys.map((item, index) => {

                    return (
                        <Bar key={index} dataKey={item} fill={this.state.colors[index]} />
                    )
                })}

            </BarChart>
        );
    }
}

function isEmpty(data) {
    return !Array.isArray(data) || data.length <= 0;
}
