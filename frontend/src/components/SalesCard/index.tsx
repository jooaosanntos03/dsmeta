import NotificationButton from "../NotificationButton"
import "./style.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-card-titulo">Vendas</h2>
            <div>
                <div className="dsmeta-card-input-container">
                    <input className="dsmeta-card-input" type="text"/>
                </div>
                <div className="dsmeta-card-input-container">
                    <input className="dsmeta-card-input" type="text"/>
                </div>
            </div>

            <div>
                <table className="dsmeta-card-table">
                    <thead>
                        <tr>
                            <th className="coluna-data-992">ID</th>
                            <th className="coluna-data-576">Data</th>
                            <th>Vendedor</th>
                            <th className="coluna-data-992">Visitas</th>
                            <th className="coluna-data-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificador</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="coluna-data-992">#341</td>
                            <td className="coluna-data-576">05/09/2022</td>
                            <td>João</td>
                            <td className="coluna-data-992">15</td>
                            <td className="coluna-data-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-card-notificacao-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="coluna-data-992">#342</td>
                            <td className="coluna-data-576">05/09/2022</td>
                            <td>João</td>
                            <td className="coluna-data-992">15</td>
                            <td className="coluna-data-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-card-notificacao-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="coluna-data-992">#343</td>
                            <td className="coluna-data-576">05/09/2022</td>
                            <td>João</td>
                            <td className="coluna-data-992">15</td>
                            <td className="coluna-data-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-card-notificacao-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard