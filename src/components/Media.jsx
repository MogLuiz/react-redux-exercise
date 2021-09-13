/* eslint-disable import/no-anonymous-default-export */

import React from 'react'

import { connect } from 'react-redux'

import Card from './Card'

const Media = (props) => {
    const { min, max } = props
    const result = (min + max) / 2
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{result}</strong>
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
export default connect(mapStateToProps)(Media)