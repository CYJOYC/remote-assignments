class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMore: false,
            isOpenSlide: false,
            message: 'Welcome Message'
        }
    }

    handleMessageClick() {
        this.setState({
            message: 'Have a Good Time!'
        })
    }

    handleMoreClick() {
        this.setState({
            isShowMore: true
        })
    }

    toggleSlide() {
        this.setState({ isOpenSlide: !this.state.isOpenSlide });
    }


    render() {
        return (
            <React.Fragment>
                <div className="menu">
                    <label onClick={() => {this.toggleSlide()}}>☰</label>
                    <ul>
                        <li><img src="../images/iconfinder_47_5027841.png" alt="logo" /></li>
                        <li><a href="">Item 4</a></li>
                        <li><a href="">Item 3</a></li>
                        <li><a href="">Item 2</a></li>
                        <li><a href="">Item 1</a></li>
                    </ul>
                </div>
                <div className={`slider ${this.state.isOpenSlide ? '': 'hidden'}`}>
                    <div className="close" onClick={() => {this.toggleSlide()}}>X</div>
                    <ul>
                        <li><a href="">Item 1</a></li>
                        <li><a href="">Item 2</a></li>
                        <li><a href="">Item 3</a></li>
                        <li><a href="">Item 4</a></li>
                    </ul>
                </div>
                <div className="head" onClick={() => {this.handleMessageClick()}} >{this.state.message}</div>
                <h3 className="intro">This is a website about HW</h3>
                <div className="content">
                    <div className="box">
                        <div className="title">Content1</div>
                    </div>
                    <div className="box">
                        <div className="title">Content2</div>
                    </div>
                    <div className="box">
                        <div className="title">Content3</div>
                    </div>
                    <div className="box">
                        <div className="title">Content4</div>
                    </div>
                </div>
                <div className="action">
                    <button className="button" onClick={() => this.handleMoreClick()}>Call to Action</button>
                </div>
                <div id="more" className={`content ${ this.state.isShowMore ? '' : 'hidden'}`}>
                    <div className="box">
                        <div className="title">Content1</div>
                    </div>
                    <div className="box">
                        <div className="title">Content2</div>
                    </div>
                    <div className="box">
                        <div className="title">Content3</div>
                    </div>
                    <div className="box">
                        <div className="title">Content4</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

