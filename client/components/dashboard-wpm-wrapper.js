import React, {Component} from 'react'
import DashBoardWpmD3 from './dashboard-wpm-d3'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class DashboardWpmWrapper extends Component {
  // important to put in component did mount because we're changing something that already loaded to screen
  constructor(props) {
    super(props)
    this.speeches = this.props.speeches
  }
  componentDidMount() {
    this.setState({
      chart: new DashBoardWpmD3(this.refs.dashWpm, this.speeches)
    })
  }

  shouldComponentUpdate() {
    // should not react re-render when something changes, we'll manually update
    return false
  }

  render() {
    const aveWpm = Math.round(
      this.speeches.reduce((accum, speech) => accum + speech.wpm, 0) /
        this.speeches.length
    )
    return (
      <Paper className="dashboard-item" elevation={4}>
        <div ref="dashWpm" />
        <Paper elevation={2}>
          <Typography variant="h5">Words Per Minute</Typography>
          <hr />
          <Typography variant="body1" component="p">
            Your Average Speed is {aveWpm} words per minute for your last{' '}
            {this.speeches.length} speeches! That's as fast as a real person!
          </Typography>
        </Paper>
      </Paper>
    )
  }
}

export default DashboardWpmWrapper