import React, {Component} from 'react';

const TITLES = [
  'a software engineer',
  'a polyglot',
  'a traveller'
];




class Title extends Component {
  state = {titleIndex: 0};

  componentDidMount() {
    console.log('Title component has mounted');
    this.animateTitles();
  }

  componentWillUnmount() {
    console.log('Title component will unmount!');
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(()=>{
      const titleIndex = (this.state.titleIndex +1)%TITLES.length;
      this.setState({titleIndex})
    }, 4000);
    console.log(this.titleInterval);
  }


  render() {
    const title = TITLES[this.state.titleIndex];
    return (
      <p>I am {title}</p>
    )
  }
}



export default Title;
