/* eslint-disable import/no-anonymous-default-export */
import './Intervalo.css'
import React from 'react'

import Card from './Card'

export default props => {

    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}