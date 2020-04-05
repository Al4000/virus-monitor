import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ data: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/random_masks_usage_instructions.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "ba93fb142dmshe40f2ac24d1897dp1e3b54jsnd84963926b4b"
            }
        })
            .then(response => response.blob())
            .then(images => {
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL(images);
                this.setState({data: imageUrl, isFetching: false })
            })

        // .catch(e => {
        //     console.log(e);
        //     this.setState({data: '', isFetching: false, error: e }));
        // })
    }

    render() {
        const { data, isFetching, error } = this.state;

        if (isFetching) return <div>...Loading</div>;


        return  (
            <img src={data} alt="" className="list__img"/>
        )
    }
}