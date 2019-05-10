import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from './style'
import Button from '@material-ui/core/Button';
import f from './functios'
class Main extends Component{
    constructor(props){
      super(props)
      this.state={
        inputWeather:'',
        minTemp:'',
        maxTemp:'',
        descp:'',
        change:false
      }
      this.componentDidMountMinTemp=f.componentDidMountMinTemp.bind(this)
      this.componentDidMountMaxTemp=f.componentDidMountMaxTemp.bind(this)
      this.componentDidMountDescTemp=f.componentDidMountDescTemp.bind(this)
    }
    handleChangeButton = this.handleChangeButton.bind(this)

  handleChangeButton(){
          this.componentDidMountMinTemp()
          this.componentDidMountMaxTemp()
          this.componentDidMountDescTemp()
          this.setState({change:!this.state.change})
  }
    handleChange(e){
        this.setState({inputWeather:e.target.value})
    }
    render(){
        const { classes } = this.props;
 return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Weather App 
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
          </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(event)=>this.handleChange(event)}
              value={this.state.inputWeather}
            />
          </div>
            <Button style={{ backgroundColor: '#007bff'}}
            onClick={this.handleChangeButton }>Get</Button>
        </Toolbar>
        {this.state.change===true?
        <div>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Minimum Temperature  =>    {this.state.minTemp}
        </Typography>
         <Typography className={classes.title} variant="h6" color="inherit" noWrap>
         Maximum Temperature   =>     {this.state.maxTemp}
     </Typography>
     <Typography className={classes.title} variant="h6" color="inherit" noWrap>
         Weather Description    =>    {this.state.descp}
     </Typography>
     </div>
        : null
      }
       </AppBar>
    </div>
  );
}
}
 

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);