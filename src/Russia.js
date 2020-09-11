import React from 'react'

export default class Russia extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Russia", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "ba93fb142dmshe40f2ac24d1897dp1e3b54jsnd84963926b4b"
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({data: result.latest_stat_by_country[0], isFetching: false })
            })

            .catch(e => {
                console.log(e);
                this.setState({data: '', isFetching: false, error: e })
            })
    }

    render() {
        const { data, isFetching, error } = this.state;

        if (isFetching) {
            return <div className="list">...Loading</div>
        }

        if (error) {
            return <div>{`Error: ${error.message}`}</div>
        }

        const maxDate = data.record_date.slice(0, 10);
        return (
            <div className="col">
                <ul className="list">
                    <li>
                        <h2>{data.country_name}</h2>
                    </li>
                    <li>
                        <p>Новых случаев:</p><h2>{data.new_cases}</h2>
                    </li>
                    <li>
                        <p>Летальных за день:</p><h2>{data.new_deaths}</h2>
                    </li>
                    <li>
                        <p>Всего случаев:</p><h2>{data.total_cases}</h2>
                    </li>
                    <li>
                        <p>Всего смертей:</p><h2>{data.total_deaths}</h2>
                    </li>
                    <li>
                        <p>Всего выздоровело:</p><h2>{data.total_recovered}</h2>
                    </li>
                    <li>
                        <p>Заражений в минуту:</p><h2>{data.total_cases_per1m}</h2>
                    </li>
                    <li>
                        <p>Максимально за день:</p><h2>{maxDate}</h2>
                    </li>
                </ul>
            </div>
        )
    }
}