var hx = require('hxdx').hx
var dx = require('hxdx').dx
var ax = require('../../reducers/actions')

module.exports = function () { 
  function onclick () {
    var value = document.querySelector('#submission').value
    ax.submit(value)(dx)
  }

  var styles = {
    container: {
      width: '90%',
      background: 'rgb(210, 210, 210)',
      borderRadius: '8px',
      height: '100px',
      textAlign: 'left',
      padding: '5%',
      marginBottom: '5%'
    },
    message: {
      marginBottom: '3%',
      fontSize: '180%',
      color: 'rgb(50,50,50)'
    },
    input: {
      background: 'rgb(253, 253, 253)',
      borderRadius: '8px',
      border: 'none',
      height: '40%',
      width: '70%',
      marginRight: '5%',
      paddingLeft: '12px',
      fontSize: '110%',
      color: 'rgb(50,50,50)'
    },
    button: {
      borderRadius: '8px',
      border: 'none',
      height: '40%',
      width: '20%',
      fontSize: '110%',
      cursor: 'pointer'
    }
  }

  return hx`<div style=${styles.container}>
    <div style=${styles.message}>build a repository</div>
    <input id='submission' onchange=${onclick} style=${styles.input}'>
    <button onclick=${onclick} className='button' style=${styles.button}>submit</button>
  </div>`
}