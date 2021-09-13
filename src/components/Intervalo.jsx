/* eslint-disable import/no-anonymous-default-export */
import './Intervalo.css'
import React from 'react'

import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

import Card from './Card'

const Intervalo = (props) => {

    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)}
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
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)