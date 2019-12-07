import React, {Component} from 'react';

const TITLES = [
  'a software engineer',
  'a polyglot',
  'a traveller'
];




class Title extends Component {
  state = {titleIndex: 0, fadeIn: true};

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
      const fadeIn = !this.state.fadeIn
      this.setState({titleIndex,fadeIn})
    }, 4000);
    console.log(this.titleInterval);
  }


  render() {
    const {fadeIn, titleIndex} = this.state;
    const title = TITLES[titleIndex];
    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
    )
  }
}



export default Title;
