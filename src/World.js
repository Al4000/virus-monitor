import React from 'react'

export default class World extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "ba93fb142dmshe40f2ac24d1897dp1e3b54jsnd84963926b4b"
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({data: result, isFetching: false })
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

        function formatDay(i) {
            if (i < 10)  {
                i = "0" + i;
            }
            return i;
        }

        function formatMonth(i) {
            i++;
            if (i < 10)  {
                i = "0" + i;
            }
            return i;
        }

        const date = new Date();
        const day = formatDay(date.getDate());
        const month = formatMonth(date.getMonth());
        const year = date.getFullYear();
        const hours = formatDay(date.getHours());
        const minutes = formatDay(date.getMinutes());

        return (
            <div className="col">
                <ul className="list">
                    <li>
                        <h2>World</h2>
                    </li>
                    <li>
                        {/*<p>Статистика на:</p><h2>{data.statistic_taken_at} (MSK +3 часа)</h2>*/}
                        <p>Статистика на:</p><h2>{day}-{month}-{year} {hours}:{minutes}</h2>
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
                </ul>
            </div>
        )
    }
}