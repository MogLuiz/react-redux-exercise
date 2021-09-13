/* eslint-disable import/no-anonymous-default-export */
import './Intervalo.css'
import React from 'react'

import { connect } from 'react-redux'
import { alterarNumeroMinimo } from '../store/actions/numeros'

import Card from './Card'

const Intervalo = (props) => {

    const { min, max } = props

    props.alterarMinimo(10000)

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max}
                    />
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

const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // Action Creator -> action
           const action = alterarNumeroMinimo(novoNumero)
           dispatch(action)
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)