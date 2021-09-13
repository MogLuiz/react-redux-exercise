/* eslint-disable import/no-anonymous-default-export */

import React from 'react'

import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = (props) => {

    const { min, max } = props

    const random = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)