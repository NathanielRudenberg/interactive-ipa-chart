import React from 'react';
import IPAChart from '../../../../components/IPAChart';
import './chart-slider.scss'

export default function ChartSlider(props) {
    let className = props.visible === true ? 'visible' : 'hidden';

    return (
        <div className={'chart-container ' + className}>
            <IPAChart/>
        </div>
    )
}